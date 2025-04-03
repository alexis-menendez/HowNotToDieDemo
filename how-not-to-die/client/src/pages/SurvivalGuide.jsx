// file path: how-not-to-die/client/src/pages/SurvivalGuide.jsx
// Display safety and exploration tips

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../assets/css/survival-guide/SurvivalGuide.module.css';
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';

const SurvivalGuide = () => {
  const navigate = useNavigate();
  const [planets, setPlanets] = useState([]);


  return (
    <div className={styles.container}>
      <h2>Survival Guide</h2>

      {/* animated VERA quote */}
      <AnimatedVeraQuote quote="Reading these logs may help you survive. Or at least die in a more interesting way." />

      <p>Everything you need to stay alive on this alien rock...</p>

      <ul className={styles.tips}>
        <li>Always scan the atmosphere before removing your helmet.</li>
        <li>If it glows, don't touch it. If it moves, definitely don't touch it.</li>
        <li>Keep personal logs updated. Posthumous documentation earns extra hazard pay.</li>
        <li>Never trust a plant with teeth. This should be obvious.</li>
        <li>Recharge your suit before nightfall. Nightfall is... bad.</li>
      </ul>

      <h1>Field Data Archives</h1>
      <p>Before you, others tried their luck. Most didn’t make it. Their logs remain—fragmented, chaotic, and occasionally useful. Explore what they left behind:</p>

   
      <div className={styles.diagnosticsGrid}>

        <div className={styles.diagnosticRow}>
           <button onClick={() => navigate('/brune')}>Planets</button>
        </div>

        <div className={styles.diagnosticRow}>
           <button onClick={() => navigate('/landingspot')}>Initial Drop Points</button>
        </div>


        <div className={styles.diagnosticRow}>
          <button onClick={() => navigate('/flora')}>Flora</button>
        </div>

        <div className={styles.diagnosticRow}>
          <button onClick={() => navigate('/fauna')}>Fauna</button>
        </div>


        <div className={styles.diagnosticRow}>
           <button onClick={() => navigate('/unexplained')}>Unclassified Anomalies</button>
        </div>
      </div>

      
      <div className={styles.logButtons}>
        <Link to="/personallogs" className={styles.logButton}>Access Personal Logs</Link>
        <Link to="/publiclogvoting" className={styles.logButton}>Review Public Log Submissions</Link>
      </div>
    </div>
  );
};

export default SurvivalGuide;
