import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Heatmap = ({ data }) => {
  const correlation = data.correlation.toFixed(4);
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h6">Stock Correlation Heatmap</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Typography>Correlation: {correlation}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Heatmap;