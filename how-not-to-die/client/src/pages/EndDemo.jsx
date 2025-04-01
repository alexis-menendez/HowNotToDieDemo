// file path: how-not-to-die/client/src/pages/EndDemo.jsx

import React, { useState } from 'react';
import styles from '../assets/css/end-demo/EndDemo.module.css';

const epilogLines = [
  "You hit the distress signal and await to hear back from the nearest ship.",
  "As the days turn to weeks you hear nothing. You start tinkering with the ship, trying to get it up yourself.",
  "You discover that an override is causing the issue, one that VERA initiated. You are unable to override her command.",
  "Whatever is on that planet, VERA does not want you to see it.",
  "For now, your journey has come to its end."
];

const EndDemo = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < epilogLines.length) {
      setIndex(index + 1);
    }
  };

  return (
    <div className={styles.blackout}>
      <div className={styles.textBox}>
        {index < epilogLines.length ? (
          <>
            <p>{epilogLines[index]}</p>
            <button className={styles.nextButton} onClick={handleNext}>Next</button>
          </>
        ) : (
          <h2 className={styles.theEnd}>The End</h2>
        )}
      </div>
    </div>
  );
};

export default EndDemo;

