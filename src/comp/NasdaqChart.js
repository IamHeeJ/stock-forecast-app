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
    { date: '2024-11-20', AAPL: 229.00, MSFT: 415.49, AMZN: 202.88, NVDA: 145.89, META: 565.52, TSLA: 342.03, GOOGL: 175.98, AVGO: 163.25, COST: 928.08, GOOG: 177.33 },
    { date: '2024-11-21', AAPL: 229.00, MSFT: 415.49, AMZN: 202.88, NVDA: 145.89, META: 565.52, TSLA: 342.03, GOOGL: 175.98, AVGO: 163.25, COST: 928.08, GOOG: 177.33 },
    { date: '2024-11-22', AAPL: 230.29, MSFT: 425.18, AMZN: 189.10, NVDA: 139.97, META: 577.20, TSLA: 231.39, GOOGL: 169.88, AVGO: 171.62, COST: 887.10, GOOG: 171.17 },
    { date: '2024-11-23', AAPL: 227.84, MSFT: 429.29, AMZN: 192.13, NVDA: 137.87, META: 581.81, TSLA: 227.71, GOOGL: 169.31, AVGO: 170.62, COST: 886.10, GOOG: 171.19 },
    { date: '2024-11-24', AAPL: 230.46, MSFT: 421.53, AMZN: 190.78, NVDA: 135.63, META: 570.05, TSLA: 231.18, GOOGL: 169.67, AVGO: 173.11, COST: 892.67, GOOG: 172.70 },
    { date: '2024-11-25', AAPL: 228.20, MSFT: 409.99, AMZN: 194.73, NVDA: 136.56, META: 564.95, TSLA: 244.88, GOOGL: 169.74, AVGO: 174.16, COST: 889.61, GOOG: 172.87 },
    { date: '2024-11-26', AAPL: 230.04, MSFT: 423.02, AMZN: 201.36, NVDA: 136.29, META: 574.25, TSLA: 259.99, GOOGL: 171.90, AVGO: 173.68, COST: 887.96, GOOG: 173.68 },
    { date: '2024-11-27', AAPL: 229.48, MSFT: 419.64, AMZN: 201.53, NVDA: 141.58, META: 581.50, TSLA: 258.00, GOOGL: 177.10, AVGO: 178.03, COST: 895.18, GOOG: 176.47 },
    { date: '2024-11-28', AAPL: 227.74, MSFT: 420.50, AMZN: 205.70, NVDA: 146.54, META: 581.92, TSLA: 272.86, GOOGL: 177.60, AVGO: 175.73, COST: 892.41, GOOG: 179.03 }
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

