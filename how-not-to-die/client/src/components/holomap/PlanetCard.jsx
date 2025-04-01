// file path: how-not-to-die/src/components/holomap/PlanetCard.jsx
// Card showing a preview of each planet in the travel hub

import React, { useState } from 'react';
import styles from '../../assets/css/galaxy-map/PlanetCard.module.css';
import VeraDoubtQuote from '../vera-quotes/VeraDoubtQuote';
import VeraBruneQuote from '../vera-quotes/VeraBruneQuote';
import VeraOceanQuote from '../vera-quotes/VeraOceanQuote';

const planetInfo = {
  planetone: {
    name: 'Doubt',
    image: '/assets/images/planet-one/landscape/PlanetOne.png',
    description: `A harsh desert world scarred by ancient winds and unrelenting heat. Though its terrain is unforgiving and its atmosphere thick with static, travelers speak in hushed awe of its sunsets—where as many as six moons cast shifting colors across the dunes, painting the sky in violet fire.`,
  },
  planettwo: {
    name: 'Brune',
    image: '/assets/images/planet-two/landscape/PlanetTwo.png',
    description: `A mountainous planet where jagged peaks pierce through dense cloud cover like ancient sentinels. Its thin atmosphere and shifting weather make traversal perilous—but the view from the summit, above the clouds, is said to stir something primal in the soul.`,
  },
  planethree: {
    name: 'Ocean 12B',
    image: '/assets/images/planet-three/landscape/PlanetThree.png',
    description: `No data exists for Ocean 12B save its name. It was not listed in any star charts, and our scanners failed to detect it upon initial entry into the sector. When it finally registered, the results were baffling: an unbroken bioluminescent ocean with no landmass, no atmospheric anomalies, and no signs of civilization.

And yet—there is wreckage. A ship long thought lost drifts in the current, half-submerged and broken open like a shell. Its distress beacon still transmits, pulsing weakly through the static:

"We thought it was... beautiful. It called to us in the water. We... we answered. We came.

They’re still here."`,
  },
};

const PlanetCard = ({ planetKey, onTravel, onClose }) => {
  const [showRecording, setShowRecording] = useState(false);
  const planet = planetInfo[planetKey];

  if (!planet) return null;

  return (
    <div className={styles.cardOverlay}>
      <div className={styles.card}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>{planet.name}</h2>

        {/* Planet-specific VERA quote below planet name */}
        {planetKey === 'planetone' && <VeraDoubtQuote />}
        {planetKey === 'planettwo' && <VeraBruneQuote />}
        {planetKey === 'planethree' && <VeraOceanQuote />}

        <img src={planet.image} alt={planet.name} className={styles.planetImage} />

        {/* Render description with paragraph breaks */}
        {planet.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        {/* Ocean 12B special section */}
        {planetKey === 'planethree' && (
          <>
            <p><em>A recording accompanied the distress beacon.</em></p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.travelButton}
                onClick={() => setShowRecording(prev => !prev)}
              >
                {showRecording ? 'Hide Recording' : 'Play Recording'}
              </button>
            </div>
            {showRecording && (
              <video
                className={styles.videoPlayer}
                src="/assets/videos/distress-recording.mp4"
                controls
                autoPlay
              />
            )}
          </>
        )}

        <div className={styles.buttonGroup}>
          <button className={styles.travelButton} onClick={onTravel}>
            Travel to Planet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
