// file path: how-not-to-die/client/src/pages/survivials/Comms.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/survival-guide/SurvivalGuide.module.css';

const Brune = () => {
const navigate = useNavigate();
const [planets, setPlanets] = useState([]);

useEffect(() => {
  // Fetch planets data from your API
  const fetchPlanets = async () => {
    try {
      const response = await fetch('/api/planets');  // Replace with your actual API endpoint
      const data = await response.json();
      setPlanets(data);  // Set the fetched planets data to state
    } catch (error) {
      console.error('Error fetching planets data:', error);
    }
  };

  fetchPlanets();
}, []);  // Empty dependency array ensures this runs once when the component mounts

return (
  <div className="bruneWrapper">
    <h1>Planets in Star System Echo18932-5696</h1>
    <ul>
      {planets.length > 0 ? (
        planets.map((planet, index) => (
          <li key={index}>
            <h2>{planet.name}</h2>
            <p><strong>Hostility Level:</strong> {planet.hostility}</p>
            <p><strong>Exploration Risk:</strong> {planet.exploration}</p>
            <p><strong>Description:</strong> {planet.description}</p>
          </li>
        ))
      ) : (
        <li>VERA is not responsible...</li>
      )}
    </ul>
    <button onClick={() => navigate('/SurvivalGuide')}>↩ Return to Guide</button>
  </div>
);

};
export default Brune;