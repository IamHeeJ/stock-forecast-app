import yfinance as yf
import numpy as np
import pandas as pd
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.model_selection import cross_val_score
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
import time

# 데이터셋 추출을 위한 날짜 설정 및 포맷 변화
now = datetime.now()
startdate = now - timedelta(days=90)  # 최근 3개월 전부터
formatted_startdate = startdate.strftime('%Y-%m-%d')
enddate = now
formatted_enddate = enddate.strftime('%Y-%m-%d')

# NASDAQ 상위 10개 종목
nasdaq_top_10 = ['AAPL', 'MSFT', 'AMZN', 'NVDA', 'META', 'TSLA', 'GOOGL', 'AVGO', 'COST', 'GOOG']
# NASDAQ 선택 10개 종목
selected_10 = ['AAPL', 'NVDA', 'XOM', 'LIN', 'JNJ', 'AZN', 'GM', 'PEP', 'NFLX', 'COST']
all_data = pd.DataFrame()  # 각 주식의 날짜별 종가를 모을 데이터프레임
predicted_data = pd.DataFrame()  # 미래 예측치를 저장할 데이터프레임
performance_data_list = []  # 모델 성능 데이터 저장을 위한 리스트

def download_data(ticker, max_retries=3):
    attempt = 0
    while attempt < max_retries:
        try:
            data = yf.download(ticker, start=formatted_startdate, end=formatted_enddate)  # 최근 3개월치 데이터 다운로드
            if not data.empty:
                return data
        except Exception as e:
            print(f"Attempt {attempt + 1} for {ticker} failed: {e}")
        attempt += 1
        time.sleep(5)  # 재시도 전 5초 대기
    return pd.DataFrame()

def process_ticker(ticker):
    data = download_data(ticker)
    if data.empty:
        print(f"Failed to download data for {ticker} after retries.")
        return pd.DataFrame(), pd.DataFrame()

    data.index = pd.to_datetime(data.index)
    data = data.ffill()

    # 이동 평균 및 거래량 변동률 추가
    data['MA_5'] = data['Close'].rolling(window=5).mean()
    data['MA_10'] = data['Close'].rolling(window=10).mean()
    data['Volume_Change'] = data['Volume'].pct_change()

    # 결측값 처리
    data = data.dropna()

    # 훈련 데이터 생성 (일주일 전까지의 한 달 데이터)
    train_window_size = 30  # 한 달치 데이터
    forecast_days = 7  # 다음 일주일 예측
    features = []
    targets = []

    for i in range(len(data) - train_window_size - forecast_days):
        feature = data[['Open', 'High', 'Low', 'Volume', 'MA_5', 'MA_10', 'Volume_Change']].iloc[i:i + train_window_size].values.flatten()
        target = data['Close'].iloc[i + train_window_size:i + train_window_size + forecast_days].values
        if len(target) == forecast_days:  # 타겟 데이터의 크기가 올바른지 확인
            features.append(feature)
            targets.append(target)

    features = np.array(features)
    targets = np.array(targets)

    # 학습 및 테스트 데이터 분리 (마지막 일주일을 테스트로 사용)
    X_train = features[:-forecast_days]
    y_train = targets[:-forecast_days]
    X_test = features[-forecast_days:]
    y_test = targets[-forecast_days:]

    # 하이퍼파라미터 설정 (적절히 축소)
    model = XGBRegressor(objective='reg:squarederror', n_estimators=500, min_child_weight=1, learning_rate=0.05, max_depth=3, reg_alpha=1)
    model.fit(X_train, y_train)

    # 교차 검증
    scores = cross_val_score(model, X_train, y_train, cv=3, scoring='neg_mean_squared_error')
    mean_score = np.mean(scores)
    print(f"{ticker} Cross-validated MSE: {-mean_score}")

    # 예측
    predictions = model.predict(X_test)

    # 성능 평가
    mse = mean_squared_error(y_test, predictions)
    mae = mean_absolute_error(y_test, predictions)
    print(f'{ticker} Mean Squared Error: {mse}')
    print(f'{ticker} Mean Absolute Error: {mae}')

    # 마지막 한 달의 데이터를 사용해 다음 일주일간의 종가 예측
    latest_data = data[['Open', 'High', 'Low', 'Volume', 'MA_5', 'MA_10', 'Volume_Change']].tail(train_window_size).values.flatten().reshape(1, -1)
    next_week_prediction = model.predict(latest_data).flatten()
    print(f'{ticker} Predicted close prices for the next week: {next_week_prediction}')

    # 최근 1주일치 실제 데이터 다운로드
    actual_data = download_data(ticker, max_retries=1)
    if actual_data.empty:
        print(f"Failed to download recent data for {ticker}.")
        return pd.DataFrame(), pd.DataFrame()

    actual_data.index = pd.to_datetime(actual_data.index)

    # 시각화를 위한 데이터 정리
    y_predindex = [(now - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(7, 0, -1)]
    y_test = pd.DataFrame(actual_data['Adj Close'])
    y_test = y_test.reindex(y_predindex)
    y_pred = pd.DataFrame(next_week_prediction, index=y_test.index, columns=[ticker])

    # 모델 성능 데이터 추가
    global performance_data_list
    for date in y_predindex:
        performance_data_list.append({
            'Ticker': ticker,
            'Date': date,
            'Actual': y_test.at[date, 'Adj Close'],
            'Predicted': y_pred.at[date, ticker],
            'MSE': mse,
            'MAE': mae
        })

    # 시각화
    plt.figure(figsize=(14, 7))
    plt.plot(y_test.index, y_test['Adj Close'], label=f'{ticker} Actual Close Prices')
    plt.plot(y_pred.index, y_pred[ticker], label=f'{ticker} Predicted Close Prices', linestyle='--')
    plt.xlabel('Date')
    plt.ylabel('Close Price')
    plt.title(f'{ticker} Actual vs Predicted Close Prices')
    plt.legend()
    plt.show()

    # 최근 15일 종가 데이터 추가
    recent_data = data[['Adj Close']].tail(15).rename(columns={'Adj Close': ticker})
    return recent_data, y_pred

results = []
predictions = []
for ticker in selected_10:
    recent_data, predicted_data = process_ticker(ticker)
    if not recent_data.empty:
        results.append(recent_data)
    if not predicted_data.empty:
        predictions.append(predicted_data)

results2 = []
predictions2 = []
for ticker in nasdaq_top_10:
    recent_data, predicted_data = process_ticker(ticker)
    if not recent_data.empty:
        results2.append(recent_data)
    if not predicted_data.empty:
        predictions2.append(predicted_data)

# 모든 주식의 종가 데이터를 병합하여 CSV 파일로 저장
if results:
    all_data = pd.concat(results, axis=1)
    all_data.to_csv('recent_15_days_stock_close_prices_selected_10.csv')
    print("!!data saved!!")
else:
    print("No data to save.")

if results2:
    all_data = pd.concat(results2, axis=1)
    all_data.to_csv('recent_15_days_stock_close_prices_nasdaq_top_10.csv')
    print("!!data saved!!")
else:
    print("No data to save.")

# 모든 주식의 예측 종가 데이터를 병합하여 CSV 파일로 저장
if predictions:
    all_predictions = pd.concat(predictions, axis=1)
    all_predictions.to_csv('predicted_stock_close_prices_selected_10.csv')
    print("!!predicted data saved!!")
else:
    print("No predicted data to save.")

if predictions2:
    all_predictions = pd.concat(predictions2, axis=1)
    all_predictions.to_csv('predicted_stock_close_prices_nasdaq_top_10.csv')
    print("!!predicted data saved!!")
else:
    print("No predicted data to save.")

# 모델 성능 및 예측 데이터 저장
performance_data = pd.DataFrame(performance_data_list)

# 피벗 테이블 생성 전 중복 제거
performance_data = performance_data.drop_duplicates(subset=['Ticker', 'Date'])

# 피벗 테이블 생성
performance_data_pivot = performance_data.pivot_table(index='Ticker', columns='Date', values=['Actual', 'Predicted'], aggfunc='first')

performance_data_pivot.to_csv('model_prediction_performance_data.csv')
print("!!model performance data saved!!")