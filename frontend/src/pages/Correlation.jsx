import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Heatmap from '../components/Heatmap';

const Correlation = () => {
  const [correlationData, setCorrelationData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/stockcorrelation?ticker=NVDA,PYPL&minutes=50')
      .then(res => setCorrelationData(res.data));
  }, []);

  return correlationData ? <Heatmap data={correlationData} /> : <div>Loading...</div>;
};

export default Correlation;