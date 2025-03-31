// file path: how-not-to-die/src/pages/PlanetTravel.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/galaxy-map/PlanetTravel.module.css';
import VeraGalaxyMapQuote from '../components/vera-quotes/VeraGalaxyMapQuote'; 

const PlanetTravel = () => {
  const navigate = useNavigate();

  return (
    <>
      <VeraGalaxyMapQuote /> {/* VERA quote appears before holomap is launched */}
      <button className={styles.holomapButton} onClick={() => navigate('/holomap')}>
        Initiate Holomap Projection?
      </button>
    </>
  );
};

export default PlanetTravel;
