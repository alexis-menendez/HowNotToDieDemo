// file path: how-not-to-die/src/pages/Holomap.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/galaxy-map/Holomap.module.css';
import PlanetCard from '../components/holomap/PlanetCard';
import VeraHolomapQuote from '../components/vera-quotes/VeraHolomapQuote';
import VeraNoTravelQuote from '../components/vera-quotes/VeraNoTravelQuote'; 
import { usePlanetTracker } from '../components/holomap/PlanetLockLogic';

const Holomap = () => {
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [overrideStage, setOverrideStage] = useState(0);
  const [showOverrideBox, setShowOverrideBox] = useState(false);
  const { hasVisited, isPlanetThreeUnlocked } = usePlanetTracker();

  const handlePlanetClick = (planetKey) => {
    setSelectedPlanet(planetKey);
  };

  const handleCloseCard = () => {
    setSelectedPlanet(null);
  };

  const handleTravelClick = (planetKey) => {
    if (planetKey === 'planethree') {
      setShowOverrideBox(true);
      setOverrideStage(1);
    } else {
      navigate(`/travel?planet=${planetKey}`);
    }
  };

  const handleOverrideClick = () => {
    if (overrideStage < 3) {
      setOverrideStage((prev) => prev + 1);
    } else {
      navigate('/shuttlebreak');
    }
  };

  return (
    <div
      className={styles.holomapWrapper}
      style={{ backgroundImage: `url(/assets/images/GalaxyMapPixel.png)` }}
    >
      <VeraHolomapQuote />

      {/* Clickable planets */}
      <button
        className={styles.planet}
        style={{ top: '30%', left: '21%' }}
        onClick={() => handlePlanetClick('planetone')}
      >
        Doubt {hasVisited('planetone') && '✅'}
      </button>
      <button
        className={styles.planet}
        style={{ top: '50%', left: '46%' }}
        onClick={() => handlePlanetClick('planettwo')}
      >
        Brune {hasVisited('planettwo') && '✅'}
      </button>
      {isPlanetThreeUnlocked() && (
        <button
          className={styles.planet}
          style={{ top: '70%', left: '76%' }}
          onClick={() => handlePlanetClick('planethree')}
        >
          Ocean 12B {hasVisited('planethree') && '✅'}
        </button>
      )}

      {/* Spinning Planets */}
      <div
        className={styles.planetOneSpinner}
        style={{ top: '20%', left: '20.5%' }}
        onClick={() => handlePlanetClick('planetone')}
        title="Planet One"
      />
      <div
        className={styles.planetTwoSpinner}
        style={{ top: '35%', left: '45.5%' }}
        onClick={() => handlePlanetClick('planettwo')}
        title="Planet Two"
      />
      {isPlanetThreeUnlocked() && (
        <div
          className={styles.planetThreeSpinner}
          style={{ top: '50%', left: '73.5%' }}
          onClick={() => handlePlanetClick('planethree')}
          title="Planet Three"
        />
      )}

      {/* Return to console */}
      <button className={styles.backButton} onClick={() => navigate('/planettravel')}>
        ↩ Return to Console
      </button>

      {/* Show Planet Card */}
      {selectedPlanet && (
        <PlanetCard
          planetKey={selectedPlanet}
          onTravel={() => handleTravelClick(selectedPlanet)}
          onClose={handleCloseCard}
        />
      )}

      {/* Override Modal */}
      {showOverrideBox && (
        <div className={styles.overrideModal}>
          <div className={styles.overrideContent}>
            <VeraNoTravelQuote stage={overrideStage} />
            {overrideStage === 1 && (
              <button onClick={handleOverrideClick}>
                Override AI Concerns
              </button>
            )}
            {overrideStage === 2 && (
              <button onClick={handleOverrideClick}>
                Force Travel
              </button>
            )}
            {overrideStage === 3 && (
              <button onClick={handleOverrideClick}>
                Turn Off AI Safety Permissions & Force Override
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Holomap;
