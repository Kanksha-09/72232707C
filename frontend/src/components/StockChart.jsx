import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';

const StockChart = ({ ticker, data }) => {
  const chartData = {
    labels: data.priceHistory.map(p => new Date(p.lastUpdatedAt).toLocaleTimeString()),
    datasets: [
      {
        label: `${ticker} Price`,
        data: data.priceHistory.map(p => p.price),
        borderColor: 'blue',
        fill: false
      },
      {
        label: `Average: ${data.averageStockPrice.toFixed(2)}`,
        data: Array(data.priceHistory.length).fill(data.averageStockPrice),
        borderColor: 'red',
        borderDash: [5, 5],
        fill: false
      }
    ]
  };

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h6">{ticker} - Stock Chart</Typography>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default StockChart;