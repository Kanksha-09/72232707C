import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockChart from "components/StockChart.jsx";

const Home = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/stocks/NVDA?minutes=50').then(res => setStockData(res.data));
  }, []);

  return stockData ? <StockChart ticker="NVDA" data={stockData} /> : <div>Loading...</div>;
};

export default Home;