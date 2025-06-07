import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Correlation from './pages/Correlation';
import { AppBar, Toolbar, Button } from '@mui/material';

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/correlation">Correlation</Button>
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/correlation" element={<Correlation />} />
    </Routes>
  </Router>
);

export default App;