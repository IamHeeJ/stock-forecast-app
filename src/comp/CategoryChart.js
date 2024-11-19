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

const CategoryChart = () => {
//   const chartData = [
//     { date: '2024-11-11', AAPL: 224.23, MSFT: 418.01, AMZN: 206.84, NVDA: 145.26, META: 583.17, TSLA: 350.0, GOOGL: 180.35, AVGO: 178.91, COST: 932.88, GOOG: 181.97 },
//     { date: '2024-11-12', AAPL: 224.23, MSFT: 423.03, AMZN: 208.91, NVDA: 148.29, META: 584.82, TSLA: 328.49, GOOGL: 181.62, AVGO: 176.22, COST: 932.38, GOOG: 183.32 },
//     { date: '2024-11-13', AAPL: 225.12, MSFT: 425.2, AMZN: 214.1, NVDA: 146.27, META: 580.0, TSLA: 330.24, GOOGL: 178.88, AVGO: 173.58, COST: 933.73, GOOG: 180.49 },
//     { date: '2024-11-14', AAPL: 228.22, MSFT: 426.89, AMZN: 211.48, NVDA: 146.76, META: 577.16, TSLA: 311.18, GOOGL: 175.58, AVGO: 170.38, COST: 923.89, GOOG: 177.35 },
//     { date: '2024-11-15', AAPL: 225.0, MSFT: 415.0, AMZN: 202.61, NVDA: 141.98, META: 554.08, TSLA: 320.72, GOOGL: 172.49, AVGO: 164.84, COST: 907.07, GOOG: 173.89 },
//     { date: '2024-11-18', AAPL: 233.06, MSFT: 421.0, AMZN: 187.26, NVDA: 139.3, META: 585.57, TSLA: 265.43, GOOGL: 163.53, AVGO: 171.66, COST: 887.06, GOOG: 165.32 },
//     { date: '2024-11-19', AAPL: 233.69, MSFT: 427.07, AMZN: 188.0, NVDA: 133.08, META: 587.01, TSLA: 262.51, GOOGL: 164.8, AVGO: 174.98, COST: 889.51, GOOG: 167.02 },
//     { date: '2024-11-20', AAPL: 235.61, MSFT: 426.07, AMZN: 188.15, NVDA: 137.01, META: 588.97, TSLA: 255.69, GOOGL: 165.69, AVGO: 176.41, COST: 887.2, GOOG: 167.71 },
//     { date: '2024-11-21', AAPL: 232.34, MSFT: 420.19, AMZN: 188.07, NVDA: 138.12, META: 576.46, TSLA: 244.64, GOOGL: 164.49, AVGO: 171.73, COST: 890.32, GOOG: 166.82 },
//     { date: '2024-11-22', AAPL: 235.67, MSFT: 421.25, AMZN: 187.71, NVDA: 135.93, META: 577.34, TSLA: 243.18, GOOGL: 164.25, AVGO: 169.79, COST: 898.17, GOOG: 165.75 },
//     { date: '2024-11-23', AAPL: 231.03, MSFT: 426.59, AMZN: 189.11, NVDA: 137.88, META: 573.62, TSLA: 250.58, GOOGL: 165.32, AVGO: 170.04, COST: 893.49, GOOG: 166.81 },
//     { date: '2024-11-24', AAPL: 230.57, MSFT: 424.09, AMZN: 195.26, NVDA: 139.97, META: 567.62, TSLA: 264.98, GOOGL: 165.64, AVGO: 174.06, COST: 898.1, GOOG: 167.55 }
//   ];
    const chartData = [
    { date: '2024-11-11', AAPL: 224.23, NVDA: 145.26, XOM: 119.49, LIN: 456.44, JNJ: 155.04, AZN: 64.79, GM: 57.66, PEP: 164.26, NFLX: 805.44, COST: 932.88 },
    { date: '2024-11-12', AAPL: 224.23, NVDA: 148.29, XOM: 119.37, LIN: 455.59, JNJ: 152.64, AZN: 65.19, GM: 57.41, PEP: 164.34, NFLX: 819.50, COST: 932.38 },
    { date: '2024-11-13', AAPL: 225.12, NVDA: 146.27, XOM: 120.48, LIN: 456.24, JNJ: 153.24, AZN: 65.29, GM: 57.71, PEP: 164.74, NFLX: 830.47, COST: 933.73 },
    { date: '2024-11-14', AAPL: 228.22, NVDA: 146.76, XOM: 120.56, LIN: 453.49, JNJ: 151.87, AZN: 65.04, GM: 57.62, PEP: 165.15, NFLX: 837.26, COST: 923.89 },
    { date: '2024-11-15', AAPL: 225.00, NVDA: 141.98, XOM: 119.31, LIN: 449.10, JNJ: 154.00, AZN: 63.23, GM: 57.04, PEP: 158.62, NFLX: 823.96, COST: 907.07 },
    { date: '2024-11-18', AAPL: 233.06, NVDA: 139.30, XOM: 122.66, LIN: 483.98, JNJ: 161.78, AZN: 75.05, GM: 52.43, PEP: 174.92, NFLX: 719.06, COST: 887.06 },
    { date: '2024-11-19', AAPL: 233.69, NVDA: 133.08, XOM: 120.19, LIN: 485.75, JNJ: 164.01, AZN: 75.05, GM: 52.46, PEP: 174.48, NFLX: 715.81, COST: 889.51 },
    { date: '2024-11-20', AAPL: 235.61, NVDA: 137.01, XOM: 120.17, LIN: 480.35, JNJ: 162.83, AZN: 72.99, GM: 52.68, PEP: 174.48, NFLX: 699.36, COST: 887.20 },
    { date: '2024-11-21', AAPL: 232.34, NVDA: 138.12, XOM: 120.01, LIN: 476.07, JNJ: 162.83, AZN: 71.14, GM: 52.58, PEP: 174.58, NFLX: 687.94, COST: 890.32 },
    { date: '2024-11-22', AAPL: 235.67, NVDA: 135.93, XOM: 119.92, LIN: 473.76, JNJ: 163.41, AZN: 71.15, GM: 52.43, PEP: 174.53, NFLX: 766.04, COST: 898.17 },
    { date: '2024-11-23', AAPL: 231.03, NVDA: 137.88, XOM: 120.02, LIN: 473.76, JNJ: 162.83, AZN: 71.15, GM: 52.37, PEP: 174.19, NFLX: 766.95, COST: 893.49 },
    { date: '2024-11-24', AAPL: 230.57, NVDA: 139.97, XOM: 119.98, LIN: 473.76, JNJ: 162.69, AZN: 66.51, GM: 51.80, PEP: 173.37, NFLX: 762.29, COST: 898.10 }
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
            <Line type="monotone" dataKey="NVDA" stroke="#82ca9d" name="NVDA" />
            <Line type="monotone" dataKey="XOM" stroke="#ffc658" name="XOM" />
            <Line type="monotone" dataKey="LIN" stroke="#ff7300" name="LIN" />
            <Line type="monotone" dataKey="JNJ" stroke="#0077c2" name="JNJ" />
            <Line type="monotone" dataKey="AZN" stroke="#d2691e" name="AZN" />
            <Line type="monotone" dataKey="GM" stroke="#ff69b4" name="GM" />
            <Line type="monotone" dataKey="PEP" stroke="#32cd32" name="PEP" />
            <Line type="monotone" dataKey="NFLX" stroke="#ffa07a" name="NFLX" />
            <Line type="monotone" dataKey="COST" stroke="#4682b4" name="COST" />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  
};

export default CategoryChart;
