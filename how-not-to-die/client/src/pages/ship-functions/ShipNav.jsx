// file path: how-not-to-die/client/src/pages/ship-functions/ShipNav.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/end-demo/ShipFunctions.module.css';

const ShipNav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.functionPage}>
      <h2>Navigation Core</h2>
      <ul>
        <li>Stellar Charts: <span>✅</span></li>
        <li>Autopilot Subroutine: <span>❌</span></li>
        <li>Trajectory Calculator: <span>❌</span></li>
        <li>Gyroscopic Stabilizers: <span>✅</span></li>
      </ul>
      <button onClick={() => navigate('/shuttlebreak')}>↩ Return to Diagnostics</button>
    </div>
  );
};

export default ShipNav;
