// file path: how-not-to-die/client/src/pages/SurvivalGuide.jsx
// Display safety and exploration tips

import React from 'react';
import styles from '../assets/css/survival-guide/SurvivalGuide.module.css';
// Replace the original quote component with the animated version
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';

const SurvivalGuide = () => {
  return (
    <div className={styles.container}>
      <h2>Survival Guide</h2>

      {/* Replace static VERA quote with animated robot */}
      <AnimatedVeraQuote quote="Reading these logs may help you survive. Or at least die in a more interesting way." />

      <p>Everything you need to stay alive on this alien rock...</p>

      <ul className={styles.tips}>
        <li>Always scan the atmosphere before removing your helmet.</li>
        <li>If it glows, don't touch it. If it moves, definitely don't touch it.</li>
        <li>Keep personal logs updated. Posthumous documentation earns extra hazard pay.</li>
        <li>Never trust a plant with teeth. This should be obvious.</li>
        <li>Recharge your suit before nightfall. Nightfall is... bad.</li>
      </ul>
    </div>
  );
};

export default SurvivalGuide;
