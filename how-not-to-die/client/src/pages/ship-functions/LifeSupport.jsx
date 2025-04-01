// file path: how-not-to-die/client/src/pages/ship-functions/LifeSupport.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/end-demo/ShipFunctions.module.css';

const LifeSupport = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.functionPage}>
      <h2>Life Support Systems</h2>
      <ul>
        <li>Air Filtration: <span>✅</span></li>
        <li>Oxygen Levels: <span>✅</span></li>
        <li>CO₂ Scrubbers: <span>✅</span></li>
        <li>Temperature Control: <span>✅</span></li>
      </ul>
      <button onClick={() => navigate('/shuttlebreak')}>↩ Return to Diagnostics</button>
    </div>
  );
};

export default LifeSupport;

