// file path: how-not-to-die/client/src/pages/ship-functions/Comms.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/end-demo/ShipFunctions.module.css';

const Comms = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.functionPage}>
      <h2>Communication Array</h2>
      <ul>
        <li>Signal Uplink: <span>✅</span></li>
        <li>Internal Comms: <span>✅</span></li>
        <li>Long-Range Transmitter: <span>✅</span></li>
        <li>Subspace Antenna: <span>✅</span></li>
      </ul>
      <button onClick={() => navigate('/shuttlebreak')}>↩ Return to Diagnostics</button>
    </div>
  );
};

export default Comms;

