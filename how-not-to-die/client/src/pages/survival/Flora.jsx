// file path: how-not-to-die/client/src/pages/survivials/Comms.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/survival-guide/SurvivalGuide.module.css';

const Flora = () => {
const navigate = useNavigate();
const [flora, setFlora] = useState([]);

useEffect(() => {
  // Fetch planets data from your API
  const fetchFlora = async () => {
    try {
      const response = await fetch('/api/flora');  // Replace with your actual API endpoint
      const data = await response.json();
      setFlora(data);  // Set the fetched planets data to state
    } catch (error) {
      console.error('Error fetching planets data:', error);
    }
  };

  fetchFlora();
}, []);  // Empty dependency array ensures this runs once when the component mounts

return (
    <div>
      <h1>The Planets</h1>
      <ul >
      {flora.length > 0 ? (
           flora.map((flora, index) => (
             <li key={index} >
               <h2>{flora.name}</h2>
                <p><strong>Planet:</strong> {flora.planet}</p>
                <p><strong>Is there Teeth?:</strong> {flora.teeth}</p>
                <p><strong>Lickability:</strong> {flora.lickability}</p>
                <p><strong>What Do They Eat?:</strong> {flora.foo}</p>
               <p><strong>Description:</strong> {flora.description}</p>
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
export default Flora;