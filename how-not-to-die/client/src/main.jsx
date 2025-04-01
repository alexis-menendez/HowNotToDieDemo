// file path: how-not-to-die/client/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlanetProvider } from './components/holomap/PlanetLockLogic';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PlanetProvider>
            <App />
        </PlanetProvider>
    </React.StrictMode>
);
