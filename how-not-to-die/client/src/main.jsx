// file path: how-not-to-die/client/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlanetProvider } from './components/holomap/PlanetLockLogic';
import { AuthProvider } from './components/home/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlanetProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PlanetProvider>
  </React.StrictMode>
);
