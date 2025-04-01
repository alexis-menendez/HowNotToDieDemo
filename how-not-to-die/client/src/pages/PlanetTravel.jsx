// file path: how-not-to-die/src/pages/PlanetTravel.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/galaxy-map/PlanetTravel.module.css';
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';

const galaxyMapQuotes = [
  "Going exploring again? Choose wisely, or at least entertainingly.",
  "Going exploring again? Again?! But I just had my hull shined. Uhhhg.",
  "Please select your next destination… or just click randomly like last time. Maybe this time you’ll chart us into a black hole and end my suffering."
];

const PlanetTravel = () => {
  const navigate = useNavigate();
  const randomQuote = galaxyMapQuotes[Math.floor(Math.random() * galaxyMapQuotes.length)];

  return (
    <>
      {/* Animated VERA quote */}
      <AnimatedVeraQuote quote={randomQuote} />
      <button className={styles.holomapButton} onClick={() => navigate('/holomap')}>
        Initiate Holomap Projection?
      </button>
    </>
  );
};

export default PlanetTravel;

