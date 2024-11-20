import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const CompanyChart = ({ symbol, data }) => {
    // 해당 기업의 데이터만 추출
    const companyData = data.map(item => ({
        date: item.date,
        value: item[symbol]
    }));

    // 최대값과 최소값 계산
    const maxPrice = Math.max(...companyData.map(item => item.value));
    const minPrice = Math.min(...companyData.map(item => item.value));

    // Y축 범위 계산
    // 가격 변동을 더 극적으로 보여주기 위해 최대/최소값 기준으로 여유 공간 추가
    const yAxisMargin = (maxPrice - minPrice) * 0.1; // 10%의 여유 공간
    const yAxisMin = Math.floor(minPrice - yAxisMargin);
    const yAxisMax = Math.ceil(maxPrice + yAxisMargin);

    // 기업별 차트 색상 매핑
    const colorMap = {
        AAPL: '#8884d8',
        MSFT: '#82ca9d',
        AMZN: '#ffc658',
        NVDA: '#ff7300',
        META: '#0077c2',
        TSLA: '#d2691e',
        GOOGL: '#ff69b4',
        AVGO: '#32cd32',
        COST: '#ffa07a',
        GOOG: '#4682b4',
        XOM: '#ffc658',
        LIN: '#ff7300',
        JNJ: '#0077c2',
        AZN: '#d2691e',
        GM: '#ff69b4',
        PEP: '#32cd32',
        NFLX: '#ffa07a',
    };

    const formatYAxis = (value) => {
        return `${value.toFixed(2)}`;
    };

    const formatTooltip = (value) => {
        return [`${value.toFixed(2)} USD`];
    };

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={companyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis
                        domain={[yAxisMin, yAxisMax]}
                        tickFormatter={formatYAxis}
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                        formatter={formatTooltip}
                        labelFormatter={(date) => `날짜: ${date}`}
                    />
                    <Line
                        type="linear"
                        dataKey="value"
                        stroke={colorMap[symbol]}
                        name={symbol}
                        dot={true}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CompanyChart;