// file path: how-not-to-die/src/pages/PlanetTwo.jsx
// Second planet details + logs

import React, { useState, useEffect } from 'react'; // Added useEffect
import styles from '../assets/css/on-planet/PlanetTwo.module.css'; // CSS module for layout/styling
import VeraPlanetMessage from '../components/vera-quotes/VeraPlanetMessage'; // VERA sass
import OnSitePersonalLog from '../components/on-planet/OnSitePersonalLog'; // shared personal log tool
import WeatherScanner from '../components/weather-scanner/WeatherScanner'; // glitchy weather scanner
import { useNavigate } from 'react-router-dom';
import { usePlanetTracker } from '../components/holomap/PlanetLockLogic'; // Track visited planets

const PlanetTwo= () => {
  const navigate = useNavigate();
  const { markPlanetVisited } = usePlanetTracker(); // call to visitation logic

  useEffect(() => {
    markPlanetVisited('planettwo'); // ✅ Mark as visited on load
  }, []);

  const [logs, setLogs] = useState([]);
  const [showWeatherScanner, setShowWeatherScanner] = useState(false);

  const handleSaveLog = (newLog) => {
    const enrichedLog = {
      ...newLog,
      id: Date.now(),
      planetId: 2,
    };
    setLogs((prevLogs) => [...prevLogs, enrichedLog]);
    console.log('Log saved to state:', enrichedLog);
  };

  return (
    <div
      className={styles.planetTwoWrapper}
      style={{
        backgroundImage: 'url(/assets/images/planet-two/landscape/PlanetTwo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* HUD Overlay - sits behind all content but in front of the background */}
      <div className={styles.hudOverlay} />

      {/* Planet content layout */}
      <section className={styles.content}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>-—-  Planet:  Brune  -—-</h1>
        </div>

        {/* Personal Log Tool */}
        <OnSitePersonalLog planetId={2} onSave={handleSaveLog} />

        {/* Weather Scanner Tool */}
        <button
          className={styles.skyWatchButton}
          onClick={() => setShowWeatherScanner(true)}
        >
          SkyWatch
        </button>

        <WeatherScanner
          isOpen={showWeatherScanner}
          onClose={() => setShowWeatherScanner(false)}
        />

        {/* Return To Ship */}
        <button
          className={styles.returnButton}
          onClick={() => navigate('/holomap')}
          > 
          ↩ Return to Ship
        </button>


        {/* VERA message under return button */}
        <VeraPlanetMessage />
      </section>
    </div>
  );
};

export default PlanetTwo;
