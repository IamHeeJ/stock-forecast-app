// // import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../style/AnalysisPage.css';

// function PredictScore() {

//     return (
//         <div>
//             <header className="header">
//                 <h1 className="headerh1">주가 일기 예보</h1>
//             </header>

//             <Link to="/" className="back-link">
//                 <div className="go-back">&lt; 메인 화면으로</div>
//             </Link>

//             <div className="analysis-page">
//                 <h2>나스닥 예측 모델 성능</h2>
//             </div>
//         </div>
//     )

// }

// export default PredictScore;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import '../style/AnalysisPage.css';

const data = [
    { date: '2024-10-28', Actual: 18567.18945, Predicted: 18567.236 },
    { date: '2024-10-29', Actual: 18712.75, Predicted: 18712.123 },
    { date: '2024-10-30', Actual: 18607.92969, Predicted: 18607.996 },
    { date: '2024-10-31', Actual: 18095.15039, Predicted: 18094.822 },
    { date: '2024-11-01', Actual: 18239.91992, Predicted: 18165.607 },
    { date: '2024-11-04', Actual: 18179.98047, Predicted: 18181.748 },
    { date: '2024-11-05', Actual: 18439.16992, Predicted: 18319.42 },
    { date: '2024-11-06', Actual: 18983.4707, Predicted: 18384.336 },
    { date: '2024-11-07', Actual: 19269.46094, Predicted: 18553.846 },
    { date: '2024-11-08', Actual: 19286.7793, Predicted: 18552.928 },
    { date: '2024-11-11', Actual: 19298.75977, Predicted: 18477.643 },
    { date: '2024-11-12', Actual: 19281.40039, Predicted: 18472.014 },
    { date: '2024-11-13', Actual: 19230.7207, Predicted: 18460.29 },
    { date: '2024-11-14', Actual: 19107.65039, Predicted: 18498.604 },
    { date: '2024-11-15', Actual: 18680.11914, Predicted: 18366.826 },
    { date: '2024-11-18', Actual: null, Predicted: 18553.846 },
    { date: '2024-11-19', Actual: null, Predicted: 18552.928 },
    { date: '2024-11-20', Actual: null, Predicted: 18477.643 },
    { date: '2024-11-21', Actual: null, Predicted: 18472.014 },
    { date: '2024-11-22', Actual: null, Predicted: 18460.29 },
    { date: '2024-11-23', Actual: null, Predicted: 18498.604 },
    { date: '2024-11-24', Actual: null, Predicted: 18366.826 },
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

                <p>10/29 ~ 11/6까지 실제 주가와 예측 주가가 비슷하게 변화를 보이나, 11/7~11/14까지는 실제 값과 차이를 보인다. <br/>
                하지만 크게 상승하거나 하락하는 방향성에 대해서는 비슷한 양상을 이룬다.
                </p>
            </div>
        </div>
    );
    
}

export default PredictScore;
