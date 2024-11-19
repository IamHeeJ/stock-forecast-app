import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const NasdaqChart = () => {
  const chartData = [
    { date: '2024-11-11', AAPL: 224.23, MSFT: 418.01, AMZN: 206.84, NVDA: 145.26, META: 583.17, TSLA: 350.0, GOOGL: 180.35, AVGO: 178.91, COST: 932.88, GOOG: 181.97 },
    { date: '2024-11-12', AAPL: 224.23, MSFT: 423.03, AMZN: 208.91, NVDA: 148.29, META: 584.82, TSLA: 328.49, GOOGL: 181.62, AVGO: 176.22, COST: 932.38, GOOG: 183.32 },
    { date: '2024-11-13', AAPL: 225.12, MSFT: 425.2, AMZN: 214.1, NVDA: 146.27, META: 580.0, TSLA: 330.24, GOOGL: 178.88, AVGO: 173.58, COST: 933.73, GOOG: 180.49 },
    { date: '2024-11-14', AAPL: 228.22, MSFT: 426.89, AMZN: 211.48, NVDA: 146.76, META: 577.16, TSLA: 311.18, GOOGL: 175.58, AVGO: 170.38, COST: 923.89, GOOG: 177.35 },
    { date: '2024-11-15', AAPL: 225.0, MSFT: 415.0, AMZN: 202.61, NVDA: 141.98, META: 554.08, TSLA: 320.72, GOOGL: 172.49, AVGO: 164.84, COST: 907.07, GOOG: 173.89 },
    { date: '2024-11-18', AAPL: 233.06, MSFT: 421.0, AMZN: 187.26, NVDA: 139.3, META: 585.57, TSLA: 265.43, GOOGL: 163.53, AVGO: 171.66, COST: 887.06, GOOG: 165.32 },
    { date: '2024-11-19', AAPL: 233.69, MSFT: 427.07, AMZN: 188.0, NVDA: 133.08, META: 587.01, TSLA: 262.51, GOOGL: 164.8, AVGO: 174.98, COST: 889.51, GOOG: 167.02 },
    { date: '2024-11-20', AAPL: 235.61, MSFT: 426.07, AMZN: 188.15, NVDA: 137.01, META: 588.97, TSLA: 255.69, GOOGL: 165.69, AVGO: 176.41, COST: 887.2, GOOG: 167.71 },
    { date: '2024-11-21', AAPL: 232.34, MSFT: 420.19, AMZN: 188.07, NVDA: 138.12, META: 576.46, TSLA: 244.64, GOOGL: 164.49, AVGO: 171.73, COST: 890.32, GOOG: 166.82 },
    { date: '2024-11-22', AAPL: 235.67, MSFT: 421.25, AMZN: 187.71, NVDA: 135.93, META: 577.34, TSLA: 243.18, GOOGL: 164.25, AVGO: 169.79, COST: 898.17, GOOG: 165.75 },
    { date: '2024-11-23', AAPL: 231.03, MSFT: 426.59, AMZN: 189.11, NVDA: 137.88, META: 573.62, TSLA: 250.58, GOOGL: 165.32, AVGO: 170.04, COST: 893.49, GOOG: 166.81 },
    { date: '2024-11-24', AAPL: 230.57, MSFT: 424.09, AMZN: 195.26, NVDA: 139.97, META: 567.62, TSLA: 264.98, GOOGL: 165.64, AVGO: 174.06, COST: 898.1, GOOG: 167.55 }
  ];
  

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="AAPL" stroke="#8884d8" name="AAPL" />
          <Line type="monotone" dataKey="MSFT" stroke="#82ca9d" name="MSFT" />
          <Line type="monotone" dataKey="AMZN" stroke="#ffc658" name="AMZN" />
          <Line type="monotone" dataKey="NVDA" stroke="#ff7300" name="NVDA" />
          <Line type="monotone" dataKey="META" stroke="#0077c2" name="META" />
          <Line type="monotone" dataKey="TSLA" stroke="#d2691e" name="TSLA" />
          <Line type="monotone" dataKey="GOOGL" stroke="#ff69b4" name="GOOGL" />
          <Line type="monotone" dataKey="AVGO" stroke="#32cd32" name="AVGO" />
          <Line type="monotone" dataKey="COST" stroke="#ffa07a" name="COST" />
          <Line type="monotone" dataKey="GOOG" stroke="#4682b4" name="GOOG" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  
};

export default NasdaqChart;

