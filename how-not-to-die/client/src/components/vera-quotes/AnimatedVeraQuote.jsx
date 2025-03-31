// file path: how-not-to-die/client/src/components/vera-quotes/AnimatedVeraQuote.jsx

import React, { useState, useEffect } from 'react';
import styles from '../../assets/css/vera-quotes/AnimatedVeraQuote.module.css'; 

const jumpFrames = 9;
const squatFrames = 13;

const AnimatedVeraQuote = ({ quote }) => {
  const [frame, setFrame] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const folder = isClicked ? 'vera-squat' : 'vera-jump';
  const totalFrames = isClicked ? squatFrames : jumpFrames;
  const imagePath = `/assets/images/vera-animation/${folder}/Robot${isClicked ? 'Squat' : 'Jump'}${frame}.png`;

  // Animate frames
  useEffect(() => {
    const id = setInterval(() => {
      setFrame((prev) => (prev % totalFrames) + 1);
    }, 150); // adjust timing as needed
    setIntervalId(id);

    return () => clearInterval(id);
  }, [isClicked]);

  // Handle click to change state
  const handleClick = () => {
    setIsClicked(true);
    setFrame(1);
    clearInterval(intervalId);
  };

  return (
    <div className={styles.veraWrapper}>
      <img
        src={imagePath}
        alt="Animated VERA"
        className={styles.robot}
        onClick={handleClick}
      />

      {!isClicked && (
        <div className={styles.newMessageBox} onClick={handleClick}>
          <p className={styles.newMessageText}>NEW MESSAGE!</p>
        </div>
      )}

      {isClicked && (
        <div className={styles.quoteBox}>
          <p className={styles.quote}>"{quote}"</p>
        </div>
      )}
    </div>
  );
};

export default AnimatedVeraQuote;
