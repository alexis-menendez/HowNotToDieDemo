// file path: how-not-to-die/client/src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutRouter from './components/LayoutRouter';
import CursorTrail from './components/CursorTrail'; 

const App = () => {
  return (
    <Router>
      <CursorTrail /> 
      <LayoutRouter />
    </Router>
  );
};

export default App;
