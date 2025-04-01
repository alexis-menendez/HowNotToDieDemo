// file path: how-not-to-die/client/src/pages/ship-functions/Propulsion.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/end-demo/ShipFunctions.module.css';

const Propulsion = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.functionPage}>
      <h2>Interstellar Propulsion Matrix</h2>
      <ul>
        <li>Fuel Lines: <span>✅</span></li>
        <li>Quantum Drive: <span>❌</span></li>
        <li>Engine Coil Stabilization: <span>❌</span></li>
        <li>Thruster Controls: <span>✅</span></li>
      </ul>
      <button onClick={() => navigate('/shuttlebreak')}>↩ Return to Diagnostics</button>
    </div>
  );
};

export default Propulsion;

