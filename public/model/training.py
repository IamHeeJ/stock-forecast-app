import yfinance as yf
import numpy as np
import pandas as pd
from xgboost import XGBRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

# NASDAQ 상위 10개 종목
nasdaq_top_10 = ['AAPL', 'MSFT', 'AMZN', 'NVDA', 'META', 'TSLA', 'GOOGL', 'AVGO', 'COST', 'GOOG']

# 데이터 다운로드 및 훈련
for ticker in nasdaq_top_10:
    data = yf.download(ticker, start="2024-08-01", end="2024-10-31")  # 3개월치 데이터 다운로드
    data.index = pd.to_datetime(data.index)
    data = data.ffill()

    # 훈련 데이터 생성 (일주일 전까지의 한 달 데이터)
    train_window_size = 30  # 한 달치 데이터
    forecast_days = 7  # 다음 일주일 예측
    features = []
    targets = []

    for i in range(len(data) - train_window_size - forecast_days):
        feature = data[['Open', 'High', 'Low', 'Volume']].iloc[i:i + train_window_size].values.flatten()
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

    # XGBoost 모델 훈련
    model = XGBRegressor(objective='reg:squarederror', n_estimators=1000)
    model.fit(X_train, y_train)

    # 예측
    predictions = model.predict(X_test)

    # 성능 평가
    mse = mean_squared_error(y_test, predictions)
    print(f'{ticker} Mean Squared Error: {mse}')

    # 마지막 한 달의 데이터를 사용해 다음 일주일간의 종가 예측
    latest_data = data[['Open', 'High', 'Low', 'Volume']].tail(train_window_size).values.flatten().reshape(1, -1)
    next_week_prediction = model.predict(latest_data)
    print(f'{ticker} Predicted close prices for the next week: {next_week_prediction}')

    # 11월 1일부터 11월 7일까지의 실제 데이터 다운로드
    actual_data = yf.download(ticker, start="2024-11-01", end="2024-11-08")
    actual_data.index = pd.to_datetime(actual_data.index)

    # 시각화를 위한 데이터 정리
    y_predindex = ['2024-11-01', '2024-11-02', '2024-11-03', '2024-11-04', '2024-11-05', '2024-11-06', '2024-11-07']
    y_test = pd.DataFrame(actual_data['Adj Close'])
    y_test = y_test.reindex(y_predindex)
    next_week_prediction = next_week_prediction.flatten()  # 예측 데이터 형태 변경
    y_pred = pd.DataFrame(next_week_prediction, index=y_test.index, columns=['Predicted'])

    # 시각화
    plt.figure(figsize=(14, 7))
    plt.plot(y_test.index, y_test['Adj Close'], label=f'{ticker} Actual Close Prices')
    plt.plot(y_pred.index, y_pred['Predicted'], label=f'{ticker} Predicted Close Prices', linestyle='--')
    plt.xlabel('Date')
    plt.ylabel('Close Price')
    plt.title(f'{ticker} Actual vs Predicted Close Prices')
    plt.legend()
    plt.show()
