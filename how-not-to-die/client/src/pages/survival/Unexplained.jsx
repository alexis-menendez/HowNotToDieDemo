// file path: how-not-to-die/client/src/pages/survivials/Comms.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/survival-guide/SurvivalGuide.module.css';

const Unexplained = () => {
const navigate = useNavigate();
const [unexplained, setUnexplained] = useState([]);

useEffect(() => {
  // Fetch planets data from your API
  const fetchUnexplained = async () => {
    try {
      const response = await fetch('/api/unexplained');  // Replace with your actual API endpoint
      const data = await response.json();
      setUnexplained(data);  // Set the fetched planets data to state
    } catch (error) {
      console.error('Error fetching planets data:', error);
    }
  };

  fetchUnexplained();
}, []);  // Empty dependency array ensures this runs once when the component mounts

return (
    <div>
      <h1>The Unexplained Ends of...</h1>
      <ul >
        {unexplained.length > 0 ? (
          unexplained.map((unexplained, index) => (
            <li key={index} >
              <h2>{unexplained.name}</h2>
              <p><strong>Planet:</strong>{unexplained.planet}</p>
              <p><strong>Planet:</strong> {unexplained.planet}</p>
             <p><strong>Description:</strong> {unexplained.description}</p>
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
export default Unexplained;