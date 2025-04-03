// file path: how-not-to-die/client/src/pages/survival/Landingspot.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/survival-guide/SurvivalGuide.module.css';

const LandingSpot = () => {
const navigate = useNavigate();
const [landingspot, setlandingSpot] = useState([]);

useEffect(() => {
  // Fetch planets data from your API
  const fetchLandingspot = async () => {
    try {
      const response = await fetch('/api/landingspot');  // Replace with your actual API endpoint
      const data = await response.json();
      setlandingSpot(data);  // Set the fetched planets data to state
    } catch (error) {
      console.error('The flowers are gone:', error);
    }
  };

  fetchLandingspot();
}, []);  // Empty dependency array ensures this runs once when the component mounts

return (
    <div>
      <h1>Where to Space Park</h1>
      <ul >
        {landingspot.length > 0 ? (
          landingspot.map((landingspot, index) => (
            <li key={index} >
              <h2>{landingspot.name}</h2>
              <p><strong>Planet:</strong>{landingspot.planet}</p>
               <p><strong>Flora:</strong> {landingspot.flora}</p>
              <p><strong>Fauna:</strong> {landingspot.fauna}</p>
              <p><strong>Description:</strong> {landingspot.description}</p>
            </li>
          ))
        ) : (
          <li>VERA is not responsible...</li>
        )}
      </ul>
      <button onClick={() => navigate('/SurvivalGuide')}>↩ Return to Guide</button>
    </div>
  )
};
export default LandingSpot;