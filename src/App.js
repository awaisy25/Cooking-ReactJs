import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import history from './services/History';

import Routes from './Routes/Routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
