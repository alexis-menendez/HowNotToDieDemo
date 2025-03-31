// file path: how-not-to-die/src/pages/PlanetTwo.jsx
// Second planet details + logs

import React, { useEffect } from 'react'; // ✅ Added useEffect
import { useNavigate } from 'react-router-dom';
import VeraQuote from '../components/vera-quotes/VeraQuote';
import PersonalLogs from './PersonalLogs';
import VeraPlanetMessage from '../components/vera-quotes/VeraPlanetMessage';
import { usePlanetTracker } from '../components/holomap/PlanetLockLogic'; // ✅ Import planet tracker

const PlanetTwo = () => {
  const navigate = useNavigate();
  const { markPlanetVisited } = usePlanetTracker(); // ✅ Use tracker

  useEffect(() => {
    markPlanetVisited('planettwo'); // ✅ Mark Brune as visited
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Welcome to the Cloudy Mountain Planet</h1>

      <VeraQuote />

      <VeraPlanetMessage />

      <PersonalLogs />

      {/* Middle-left Return to Ship button */}
      <button
        onClick={() => navigate('/holomap')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#000',
          color: '#00ffcc',
          border: '1px solid #00ffcc',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        ↩ Return to Ship
      </button>
    </div>
  );
};

export default PlanetTwo;
