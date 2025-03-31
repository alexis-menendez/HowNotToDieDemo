// file path: how-not-to-die/client/src/pages/TravelAnimation.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../assets/css/galaxy-map/TravelAnimation.module.css';

const TravelAnimation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planetKey = queryParams.get('planet');

  const totalFrames = 49;
  const frameRate = 100;

  const [currentFrame, setCurrentFrame] = useState(1);
  const [previousFrame, setPreviousFrame] = useState(null);
  const [showStatic, setShowStatic] = useState(false);

  const flightFolder = {
    planetone: 'planet-one-flight',
    planettwo: 'planet-two-flight',
    planethree: 'planet-three-flight',
  }[planetKey] || 'planet-one-flight';

  useEffect(() => {
    if (!planetKey) return;

    let frame = 1;
    const interval = setInterval(() => {
      setPreviousFrame(frame);
      frame += 1;
      if (frame > totalFrames) {
        clearInterval(interval);
        setShowStatic(true); // start static effect
        setTimeout(() => {
          // Add condition below to handle Planet 3 redirect:
          if (planetKey === 'planethree') {
            navigate('/shuttlebreak');
          } else {
            navigate(`/${planetKey}`);
          }
        }, 1200); // total delay: glitch + transition
      } else {
        setCurrentFrame(frame);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [planetKey, navigate]);

  const currentImage = `/assets/images/flight-animation/${flightFolder}/Land${currentFrame}.png`;
  const previousImage = previousFrame
    ? `/assets/images/flight-animation/${flightFolder}/Land${previousFrame}.png`
    : null;

  return (
    <div className={styles.animationWrapper}>
      {previousImage && (
        <img
          src={previousImage}
          className={styles.fadeImage}
          alt="previous frame"
          style={{ opacity: 0 }}
        />
      )}
      <img
        src={currentImage}
        className={styles.fadeImage}
        alt="current frame"
        style={{ opacity: 1 }}
      />
      {showStatic && (
        <div className={styles.staticOverlay}></div>
      )}
    </div>
  );
};

export default TravelAnimation;
