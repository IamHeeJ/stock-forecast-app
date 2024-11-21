import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import '../style/AnalysisPage.css';

// const data = [
//     { date: '2024-10-30', Actual: 18607.93, Predicted: 18608.46 },
//     { date: '2024-10-31', Actual: 18095.15, Predicted: 18095.14 },
//     { date: '2024-11-01', Actual: 18239.92, Predicted: 18239.64 },
//     { date: '2024-11-04', Actual: 18179.98, Predicted: 18180.23 },
//     { date: '2024-11-05', Actual: 18439.17, Predicted: 18330.42 },
//     { date: '2024-11-06', Actual: 18983.47, Predicted: 18394.53 },
//     { date: '2024-11-07', Actual: 19269.46, Predicted: 18466.10 },
//     { date: '2024-11-08', Actual: 19286.78, Predicted: 18417.58 },
//     { date: '2024-11-11', Actual: 19298.76, Predicted: 18413.73 },
//     { date: '2024-11-12', Actual: 19281.40, Predicted: 18390.52 },
//     { date: '2024-11-13', Actual: 19230.72, Predicted: 18400.27 },
//     { date: '2024-11-14', Actual: 19107.65, Predicted: 18432.38 },
//     { date: '2024-11-15', Actual: 18680.12, Predicted: 17576.04 },
//     { date: '2024-11-18', Actual: 18791.81, Predicted: 17578.65 },
//     { date: '2024-11-19', Actual: 18987.47, Predicted: 18112.41 },
//     { date: '2024-11-21', Actual: null, Predicted: 18413.73 },
//     { date: '2024-11-22', Actual: null, Predicted: 18390.52 },
//     { date: '2024-11-23', Actual: null, Predicted: 18400.27 },
//     { date: '2024-11-24', Actual: null, Predicted: 18432.38 },
//     { date: '2024-11-25', Actual: null, Predicted: 17576.04 },
//     { date: '2024-11-26', Actual: null, Predicted: 17578.65 },
//     { date: '2024-11-27', Actual: null, Predicted: 18112.41 },
// ];

const data = [
    { date: '2024-10-31', Actual: 18095.15, Predicted: 18171.42 },
    { date: '2024-11-01', Actual: 18239.92, Predicted: 18239.46 },
    { date: '2024-11-04', Actual: 18179.98, Predicted: 18123.57 },
    { date: '2024-11-05', Actual: 18439.17, Predicted: 18439.05 },
    { date: '2024-11-06', Actual: 18983.47, Predicted: 18983.53 },
    { date: '2024-11-07', Actual: 19269.46, Predicted: 19260.49 },
    { date: '2024-11-08', Actual: 19286.78, Predicted: 19286.88 },
    { date: '2024-11-11', Actual: 19298.76, Predicted: 19070.84 },
    { date: '2024-11-12', Actual: 19281.40, Predicted: 19170.78 },
    { date: '2024-11-13', Actual: 19230.72, Predicted: 19230.62 },
    { date: '2024-11-14', Actual: 19107.65, Predicted: 19107.62 },
    { date: '2024-11-15', Actual: 18680.12, Predicted: 18679.98 },
    { date: '2024-11-18', Actual: 18791.81, Predicted: 18791.81 },
    { date: '2024-11-19', Actual: 18987.47, Predicted: 18987.91 },
    { date: '2024-11-20', Actual: 18966.14, Predicted: 18966.15 },
    { date: '2024-11-21', Actual: 18966.14, Predicted: 18966.15 },
    { date: '2024-11-22', Actual: null, Predicted: 19170.78 },
    { date: '2024-11-23', Actual: null, Predicted: 19230.62 },
    { date: '2024-11-24', Actual: null, Predicted: 19107.62 },
    { date: '2024-11-25', Actual: null, Predicted: 18679.98 },
    { date: '2024-11-26', Actual: null, Predicted: 18791.81 },
    { date: '2024-11-27', Actual: null, Predicted: 18987.91 },
    { date: '2024-11-28', Actual: null, Predicted: 18966.15 },
];


function PredictScore() {
    // 실제 데이터와 예측 데이터를 합친 최소값과 최대값을 계산
    const allData = data.filter(item => item.Actual !== null && item.Predicted !== null);  // 실제 값과 예측 값이 모두 있는 데이터만 사용
    const allValues = [...allData.map(item => item.Actual), ...allData.map(item => item.Predicted)];

    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);

    // Y축에 여유 공간을 추가하여 범위 설정
    const yAxisMargin = (maxValue - minValue) * 0.4; // 40% 여유 공간
    const yAxisMin = Math.floor(minValue - yAxisMargin);
    const yAxisMax = Math.ceil(maxValue + yAxisMargin);



    return (
        <div>
            <header className="header">
                <h1 className="headerh1">주가 일기 예보</h1>
            </header>

            <Link to="/" className="back-link">
                <div className="go-back">&lt; 메인 화면으로</div>
            </Link>

            <div className="nasdaq-whole-page">
                <h3 className="nasdaq-whole-title">나스닥 종합 주가 지수(IXIC)</h3>

                <div className="nasdaq-whole-graph-container">
                    <div className="nasdaq-whole-graph">
                        <ResponsiveContainer>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                                <YAxis
                                    domain={[yAxisMin, yAxisMax]}
                                    tickFormatter={(value) => value.toFixed(2)}
                                    tick={{ fontSize: 12 }}
                                />
                                <Tooltip formatter={(value) => `${value.toFixed(2)} USD`} labelFormatter={(date) => `날짜: ${date}`} />
                                <Line type="linear" dataKey="Actual" stroke="#4A90E2" name="Actual" dot={true} strokeWidth={2} />
                                <Line type="linear" dataKey="Predicted" stroke="#f17c66" name="Predicted" dot={true} strokeWidth={2} />
                                <Legend verticalAlign="bottom" height={36} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <p className="predict-score-description">일시적으로 실제 주가와 차이가 나는 부분이 있으나, 대체로 모델이 예측한 값이 실제 값에 가까운 좋은 성능을 보인다. </p>
                {/* <p className="predict-score-description">하지만 크게 상승하거나 하락하는 방향성에 대해서는 비슷한 양상을 예측한 것에 주목할만하다.</p> */}

            </div>
        </div>
    );

}

export default PredictScore;
