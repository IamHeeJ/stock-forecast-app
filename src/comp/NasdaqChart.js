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
  // const chartData = [
  //   { date: '2024-11-11', AAPL: 224.23, MSFT: 418.01, AMZN: 206.84, NVDA: 145.26, META: 583.17, TSLA: 350.0, GOOGL: 180.35, AVGO: 178.91, COST: 932.88, GOOG: 181.97 },
  //   { date: '2024-11-12', AAPL: 224.23, MSFT: 423.03, AMZN: 208.91, NVDA: 148.29, META: 584.82, TSLA: 328.49, GOOGL: 181.62, AVGO: 176.22, COST: 932.38, GOOG: 183.32 },
  //   { date: '2024-11-13', AAPL: 225.12, MSFT: 425.2, AMZN: 214.1, NVDA: 146.27, META: 580.0, TSLA: 330.24, GOOGL: 178.88, AVGO: 173.58, COST: 933.73, GOOG: 180.49 },
  //   { date: '2024-11-14', AAPL: 228.22, MSFT: 426.89, AMZN: 211.48, NVDA: 146.76, META: 577.16, TSLA: 311.18, GOOGL: 175.58, AVGO: 170.38, COST: 923.89, GOOG: 177.35 },
  //   { date: '2024-11-15', AAPL: 225.0, MSFT: 415.0, AMZN: 202.61, NVDA: 141.98, META: 554.08, TSLA: 320.72, GOOGL: 172.49, AVGO: 164.84, COST: 907.07, GOOG: 173.89 },
  //   { date: '2024-11-18', AAPL: 233.06, MSFT: 421.0, AMZN: 187.26, NVDA: 139.3, META: 585.57, TSLA: 265.43, GOOGL: 163.53, AVGO: 171.66, COST: 887.06, GOOG: 165.32 },
  //   { date: '2024-11-19', AAPL: 233.69, MSFT: 427.07, AMZN: 188.0, NVDA: 133.08, META: 587.01, TSLA: 262.51, GOOGL: 164.8, AVGO: 174.98, COST: 889.51, GOOG: 167.02 },
  //   { date: '2024-11-20', AAPL: 235.61, MSFT: 426.07, AMZN: 188.15, NVDA: 137.01, META: 588.97, TSLA: 255.69, GOOGL: 165.69, AVGO: 176.41, COST: 887.2, GOOG: 167.71 },
  //   { date: '2024-11-21', AAPL: 232.34, MSFT: 420.19, AMZN: 188.07, NVDA: 138.12, META: 576.46, TSLA: 244.64, GOOGL: 164.49, AVGO: 171.73, COST: 890.32, GOOG: 166.82 },
  //   { date: '2024-11-22', AAPL: 235.67, MSFT: 421.25, AMZN: 187.71, NVDA: 135.93, META: 577.34, TSLA: 243.18, GOOGL: 164.25, AVGO: 169.79, COST: 898.17, GOOG: 165.75 },
  //   { date: '2024-11-23', AAPL: 231.03, MSFT: 426.59, AMZN: 189.11, NVDA: 137.88, META: 573.62, TSLA: 250.58, GOOGL: 165.32, AVGO: 170.04, COST: 893.49, GOOG: 166.81 },
  //   { date: '2024-11-24', AAPL: 230.57, MSFT: 424.09, AMZN: 195.26, NVDA: 139.97, META: 567.62, TSLA: 264.98, GOOGL: 165.64, AVGO: 174.06, COST: 898.1, GOOG: 167.55 }
  // ];
  const chartData = [
    { date: '2024-10-30', AAPL: 229.85, MSFT: 432.53, AMZN: 192.73, NVDA: 139.34, META: 591.80, TSLA: 257.55, GOOGL: 174.46, AVGO: 176.64, COST: 877.92, GOOG: 176.14 },
    { date: '2024-10-31', AAPL: 225.66, MSFT: 406.35, AMZN: 186.40, NVDA: 132.76, META: 567.58, TSLA: 249.85, GOOGL: 171.11, AVGO: 169.77, COST: 873.02, GOOG: 172.69 },
    { date: '2024-11-01', AAPL: 222.67, MSFT: 410.37, AMZN: 197.93, NVDA: 135.40, META: 567.16, TSLA: 248.98, GOOGL: 171.29, AVGO: 168.92, COST: 877.31, GOOG: 172.65 },
    { date: '2024-11-04', AAPL: 221.77, MSFT: 408.46, AMZN: 195.78, NVDA: 136.05, META: 560.68, TSLA: 242.84, GOOGL: 169.24, AVGO: 168.55, COST: 886.07, GOOG: 170.68 },
    { date: '2024-11-05', AAPL: 223.20, MSFT: 411.46, AMZN: 199.50, NVDA: 139.91, META: 572.43, TSLA: 251.44, GOOGL: 169.74, AVGO: 173.90, COST: 890.17, GOOG: 171.41 },
    { date: '2024-11-06', AAPL: 222.48, MSFT: 420.18, AMZN: 207.09, NVDA: 145.61, META: 572.05, TSLA: 288.53, GOOGL: 176.51, AVGO: 179.55, COST: 899.25, GOOG: 178.33 },
    { date: '2024-11-07', AAPL: 227.23, MSFT: 425.43, AMZN: 210.05, NVDA: 148.88, META: 591.70, TSLA: 296.91, GOOGL: 180.75, AVGO: 183.81, COST: 913.93, GOOG: 182.28 },
    { date: '2024-11-08', AAPL: 226.96, MSFT: 422.54, AMZN: 208.18, NVDA: 147.63, META: 589.34, TSLA: 321.22, GOOGL: 178.35, AVGO: 183.64, COST: 943.80, GOOG: 179.86 },
    { date: '2024-11-11', AAPL: 224.23, MSFT: 418.01, AMZN: 206.84, NVDA: 145.26, META: 583.17, TSLA: 350.00, GOOGL: 180.35, AVGO: 178.91, COST: 932.88, GOOG: 181.97 },
    { date: '2024-11-12', AAPL: 224.23, MSFT: 423.03, AMZN: 208.91, NVDA: 148.29, META: 584.82, TSLA: 328.49, GOOGL: 181.62, AVGO: 176.22, COST: 932.38, GOOG: 183.32 },
    { date: '2024-11-13', AAPL: 225.12, MSFT: 425.20, AMZN: 214.10, NVDA: 146.27, META: 580.00, TSLA: 330.24, GOOGL: 178.88, AVGO: 173.58, COST: 933.73, GOOG: 180.49 },
    { date: '2024-11-14', AAPL: 228.22, MSFT: 426.89, AMZN: 211.48, NVDA: 146.76, META: 577.16, TSLA: 311.18, GOOGL: 175.58, AVGO: 170.38, COST: 923.89, GOOG: 177.35 },
    { date: '2024-11-15', AAPL: 225.00, MSFT: 415.00, AMZN: 202.61, NVDA: 141.98, META: 554.08, TSLA: 320.72, GOOGL: 172.49, AVGO: 164.84, COST: 907.07, GOOG: 173.89 },
    { date: '2024-11-18', AAPL: 228.02, MSFT: 415.76, AMZN: 201.70, NVDA: 140.15, META: 554.40, TSLA: 338.74, GOOGL: 175.30, AVGO: 165.67, COST: 919.51, GOOG: 176.80 },
    { date: '2024-11-19', AAPL: 228.28, MSFT: 417.79, AMZN: 204.61, NVDA: 147.01, META: 561.09, TSLA: 346.00, GOOGL: 178.12, AVGO: 165.35, COST: 930.15, GOOG: 179.58 },
    { date: '2024-11-21', AAPL: 233.85, MSFT: 425.65, AMZN: 187.08, NVDA: 141.33, META: 579.00, TSLA: 259.58, GOOGL: 173.46, AVGO: 172.28, COST: 885.29, GOOG: 175.14 },
    { date: '2024-11-22', AAPL: 231.55, MSFT: 407.37, AMZN: 190.42, NVDA: 136.53, META: 588.43, TSLA: 249.85, GOOGL: 173.46, AVGO: 170.77, COST: 888.83, GOOG: 172.69 },
    { date: '2024-11-23', AAPL: 235.67, MSFT: 410.37, AMZN: 188.26, NVDA: 133.78, META: 590.27, TSLA: 249.85, GOOGL: 165.14, AVGO: 169.85, COST: 890.40, GOOG: 166.82 },
    { date: '2024-11-24', AAPL: 233.89, MSFT: 426.59, AMZN: 189.57, NVDA: 135.57, META: 591.80, TSLA: 240.26, GOOGL: 165.15, AVGO: 169.24, COST: 893.42, GOOG: 166.82 },
    { date: '2024-11-25', AAPL: 230.57, MSFT: 430.03, AMZN: 192.73, NVDA: 133.89, META: 565.15, TSLA: 248.70, GOOGL: 163.25, AVGO: 176.21, COST: 890.57, GOOG: 165.01 },
    { date: '2024-11-26', AAPL: 230.57, MSFT: 429.67, AMZN: 192.61, NVDA: 144.03, META: 567.78, TSLA: 283.13, GOOGL: 164.65, AVGO: 170.05, COST: 888.35, GOOG: 166.72 },
    { date: '2024-11-27', AAPL: 233.03, MSFT: 425.43, AMZN: 193.55, NVDA: 147.78, META: 585.93, TSLA: 295.66, GOOGL: 178.97, AVGO: 173.40, COST: 891.29, GOOG: 180.16 },
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

