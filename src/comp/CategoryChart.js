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

    // const chartData = [
    //   { date: '2024-10-30', AAPL: 229.85, NVDA: 139.34, XOM: 115.74, LIN: 473.40, JNJ: 160.61, AZN: 72.83, GM: 51.97, PEP: 166.21, NFLX: 753.74, COST: 877.92 },
    //   { date: '2024-10-31', AAPL: 225.66, NVDA: 132.76, XOM: 115.83, LIN: 456.15, JNJ: 159.86, AZN: 71.15, GM: 50.76, PEP: 166.08, NFLX: 756.03, COST: 873.02 },
    //   { date: '2024-11-01', AAPL: 222.67, NVDA: 135.40, XOM: 114.01, LIN: 457.31, JNJ: 160.13, AZN: 71.42, GM: 50.96, PEP: 165.59, NFLX: 756.10, COST: 877.31 },
    //   { date: '2024-11-04', AAPL: 221.77, NVDA: 136.05, XOM: 117.64, LIN: 458.32, JNJ: 158.24, AZN: 71.43, GM: 51.80, PEP: 166.34, NFLX: 755.51, COST: 886.07 },
    //   { date: '2024-11-05', AAPL: 223.20, NVDA: 139.91, XOM: 117.99, LIN: 454.89, JNJ: 158.35, AZN: 66.27, GM: 53.70, PEP: 167.85, NFLX: 763.91, COST: 890.17 },
    //   { date: '2024-11-06', AAPL: 222.48, NVDA: 145.61, XOM: 120.01, LIN: 462.63, JNJ: 157.88, AZN: 63.85, GM: 55.05, PEP: 164.71, NFLX: 780.21, COST: 899.25 },
    //   { date: '2024-11-07', AAPL: 227.23, NVDA: 148.88, XOM: 120.16, LIN: 465.47, JNJ: 156.73, AZN: 64.69, GM: 55.39, PEP: 164.00, NFLX: 796.54, COST: 913.93 },
    //   { date: '2024-11-08', AAPL: 226.96, NVDA: 147.63, XOM: 120.12, LIN: 459.48, JNJ: 155.47, AZN: 64.49, GM: 55.58, PEP: 165.11, NFLX: 795.04, COST: 943.80 },
    //   { date: '2024-11-11', AAPL: 224.23, NVDA: 145.26, XOM: 119.49, LIN: 456.44, JNJ: 155.04, AZN: 64.79, GM: 57.66, PEP: 164.26, NFLX: 805.44, COST: 932.88 },
    //   { date: '2024-11-12', AAPL: 224.23, NVDA: 148.29, XOM: 119.37, LIN: 455.59, JNJ: 152.64, AZN: 65.19, GM: 57.41, PEP: 164.34, NFLX: 819.50, COST: 932.38 },
    //   { date: '2024-11-13', AAPL: 225.12, NVDA: 146.27, XOM: 120.48, LIN: 456.24, JNJ: 153.24, AZN: 65.29, GM: 57.71, PEP: 164.74, NFLX: 830.47, COST: 933.73 },
    //   { date: '2024-11-14', AAPL: 228.22, NVDA: 146.76, XOM: 120.56, LIN: 453.49, JNJ: 151.87, AZN: 65.04, GM: 57.62, PEP: 165.15, NFLX: 837.26, COST: 923.89 },
    //   { date: '2024-11-15', AAPL: 225.00, NVDA: 141.98, XOM: 119.31, LIN: 449.10, JNJ: 154.00, AZN: 63.23, GM: 57.04, PEP: 158.62, NFLX: 823.96, COST: 907.07 },
    //   { date: '2024-11-18', AAPL: 228.02, NVDA: 140.15, XOM: 120.31, LIN: 448.57, JNJ: 154.77, AZN: 63.39, GM: 56.25, PEP: 158.33, NFLX: 847.05, COST: 919.51 },
    //   { date: '2024-11-19', AAPL: 228.28, NVDA: 147.01, XOM: 118.63, LIN: 444.06, JNJ: 153.00, AZN: 63.80, GM: 55.11, PEP: 156.72, NFLX: 871.32, COST: 930.15 },
    //   { date: '2024-11-21', AAPL: 233.85, NVDA: 141.33, XOM: 119.93, LIN: 484.41, JNJ: 163.45, AZN: 73.89, GM: 52.73, PEP: 170.98, NFLX: 759.34, COST: 885.29 },
    //   { date: '2024-11-22', AAPL: 231.55, NVDA: 136.53, XOM: 119.42, LIN: 482.02, JNJ: 162.32, AZN: 72.15, GM: 51.98, PEP: 173.51, NFLX: 750.74, COST: 888.83 },
    //   { date: '2024-11-23', AAPL: 235.67, NVDA: 133.78, XOM: 115.95, LIN: 475.19, JNJ: 163.24, AZN: 71.79, GM: 51.60, PEP: 171.87, NFLX: 755.97, COST: 890.40 },
    //   { date: '2024-11-24', AAPL: 233.89, NVDA: 135.57, XOM: 119.69, LIN: 475.19, JNJ: 164.06, AZN: 72.83, GM: 52.09, PEP: 171.00, NFLX: 755.29, COST: 893.42 },
    //   { date: '2024-11-25', AAPL: 230.57, NVDA: 133.89, XOM: 119.45, LIN: 473.96, JNJ: 160.62, AZN: 67.27, GM: 51.97, PEP: 172.05, NFLX: 755.97, COST: 890.57 },
    //   { date: '2024-11-26', AAPL: 230.57, NVDA: 144.03, XOM: 120.00, LIN: 474.46, JNJ: 160.68, AZN: 64.85, GM: 51.80, PEP: 169.84, NFLX: 768.21, COST: 888.35 },
    //   { date: '2024-11-27', AAPL: 233.03, NVDA: 147.78, XOM: 119.43, LIN: 473.40, JNJ: 159.74, AZN: 64.77, GM: 53.86, PEP: 169.84, NFLX: 795.54, COST: 891.29 },
    // ];
  
const chartData = [
    { date: '2024-10-31', AAPL: 225.66, NVDA: 132.76, XOM: 115.83, LIN: 456.15, JNJ: 159.86, AZN: 71.15, GM: 50.76, PEP: 166.08, NFLX: 756.03, COST: 873.02 },
    { date: '2024-11-01', AAPL: 222.67, NVDA: 135.40, XOM: 114.01, LIN: 457.31, JNJ: 160.13, AZN: 71.42, GM: 50.96, PEP: 165.59, NFLX: 756.10, COST: 877.31 },
    { date: '2024-11-04', AAPL: 221.77, NVDA: 136.05, XOM: 117.64, LIN: 458.32, JNJ: 158.24, AZN: 71.43, GM: 51.80, PEP: 166.34, NFLX: 755.51, COST: 886.07 },
    { date: '2024-11-05', AAPL: 223.20, NVDA: 139.91, XOM: 118.00, LIN: 454.89, JNJ: 158.35, AZN: 66.27, GM: 53.70, PEP: 167.85, NFLX: 763.91, COST: 890.17 },
    { date: '2024-11-06', AAPL: 222.48, NVDA: 145.61, XOM: 120.01, LIN: 462.63, JNJ: 157.88, AZN: 63.85, GM: 55.05, PEP: 164.71, NFLX: 780.21, COST: 899.25 },
    { date: '2024-11-07', AAPL: 227.23, NVDA: 148.88, XOM: 120.16, LIN: 465.47, JNJ: 156.73, AZN: 64.69, GM: 55.39, PEP: 164.00, NFLX: 796.54, COST: 913.93 },
    { date: '2024-11-08', AAPL: 226.96, NVDA: 147.63, XOM: 120.12, LIN: 459.48, JNJ: 155.47, AZN: 64.49, GM: 55.58, PEP: 165.11, NFLX: 795.04, COST: 943.80 },
    { date: '2024-11-11', AAPL: 224.23, NVDA: 145.26, XOM: 119.49, LIN: 456.44, JNJ: 155.04, AZN: 64.79, GM: 57.66, PEP: 164.26, NFLX: 805.44, COST: 932.88 },
    { date: '2024-11-12', AAPL: 224.23, NVDA: 148.29, XOM: 119.37, LIN: 455.59, JNJ: 152.64, AZN: 65.19, GM: 57.41, PEP: 164.34, NFLX: 819.50, COST: 932.38 },
    { date: '2024-11-13', AAPL: 225.12, NVDA: 146.27, XOM: 120.48, LIN: 456.24, JNJ: 153.24, AZN: 65.29, GM: 57.71, PEP: 164.74, NFLX: 830.47, COST: 933.73 },
    { date: '2024-11-14', AAPL: 228.22, NVDA: 146.76, XOM: 120.56, LIN: 453.49, JNJ: 151.87, AZN: 65.04, GM: 57.62, PEP: 165.15, NFLX: 837.26, COST: 923.89 },
    { date: '2024-11-15', AAPL: 225.00, NVDA: 141.98, XOM: 119.31, LIN: 449.10, JNJ: 154.00, AZN: 63.23, GM: 57.04, PEP: 158.62, NFLX: 823.96, COST: 907.07 },
    { date: '2024-11-18', AAPL: 228.02, NVDA: 140.15, XOM: 120.31, LIN: 448.57, JNJ: 154.77, AZN: 63.39, GM: 56.25, PEP: 158.33, NFLX: 847.05, COST: 919.51 },
    { date: '2024-11-19', AAPL: 228.28, NVDA: 147.01, XOM: 118.63, LIN: 444.06, JNJ: 153.00, AZN: 63.80, GM: 55.11, PEP: 156.72, NFLX: 871.32, COST: 930.15 },
    { date: '2024-11-20', AAPL: 228.28, NVDA: 147.01, XOM: 118.63, LIN: 444.06, JNJ: 153.00, AZN: 63.80, GM: 55.11, PEP: 156.72, NFLX: 871.32, COST: 930.15 },
    { date: '2024-11-21', AAPL: 233.85, NVDA: 141.33, XOM: 119.93, LIN: 484.41, JNJ: 163.45, AZN: 73.89, GM: 52.73, PEP: 170.98, NFLX: 759.34, COST: 885.29 },
    { date: '2024-11-22', AAPL: 231.55, NVDA: 136.53, XOM: 119.42, LIN: 482.02, JNJ: 162.32, AZN: 72.15, GM: 51.98, PEP: 173.51, NFLX: 750.74, COST: 888.83 },
    { date: '2024-11-23', AAPL: 235.67, NVDA: 133.78, XOM: 115.95, LIN: 475.19, JNJ: 163.24, AZN: 71.79, GM: 51.60, PEP: 171.87, NFLX: 755.97, COST: 890.40 },
    { date: '2024-11-24', AAPL: 233.89, NVDA: 135.57, XOM: 119.69, LIN: 475.19, JNJ: 164.06, AZN: 72.83, GM: 52.09, PEP: 171.00, NFLX: 755.29, COST: 893.42 },
    { date: '2024-11-25', AAPL: 230.57, NVDA: 133.89, XOM: 119.45, LIN: 473.96, JNJ: 160.62, AZN: 67.27, GM: 51.97, PEP: 172.05, NFLX: 755.97, COST: 890.57 },
    { date: '2024-11-26', AAPL: 230.57, NVDA: 144.03, XOM: 120.00, LIN: 474.46, JNJ: 160.68, AZN: 64.85, GM: 51.80, PEP: 169.84, NFLX: 768.21, COST: 888.35 },
    { date: '2024-11-27', AAPL: 233.03, NVDA: 147.78, XOM: 119.43, LIN: 473.40, JNJ: 159.74, AZN: 64.77, GM: 53.86, PEP: 169.84, NFLX: 795.54, COST: 891.29 },
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
