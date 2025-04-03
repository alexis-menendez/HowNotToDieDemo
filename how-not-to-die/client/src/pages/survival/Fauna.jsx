// file path: how-not-to-die/client/src/pages/ship-functions/Comms.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/survival-guide/SurvivalGuide.module.css';

const Fauna = () => {
 const navigate = useNavigate();
 const [fauna, setFauna] = useState([]);
 
 useEffect(() => {
   // Fetch planets data from your API
   const fetchFauna = async () => {
     try {
       const response = await fetch('/api/fauna');  // Replace with your actual API endpoint
       const data = await response.json();
       setFauna(data);  // Set the fetched planets data to state
     } catch (error) {
       console.error('They have all... withered:', error);
     }
   };
 
   fetchFauna();
 }, []);  // Empty dependency array ensures this runs once when the component mounts
 
 return (
     <div>
       <h1>The Flowers and the Trees and... that thing with teeth</h1>
       <ul >
         {fauna.length > 0 ? (
           fauna.map((fauna, index) => (
             <li key={index} >
               <h2>{fauna.name}</h2>
               <p><strong>Planet:</strong> {fauna.planet}</p>
                <p><strong>How Many Teeth?:</strong> {fauna.teeth}</p>
                <p><strong>How Many Claws?:</strong> {fauna.claws}</p>
                <p><strong>What Do They Eat?:</strong> {fauna.eyes}</p>
               <p><strong>Description:</strong> {fauna.description}</p>
             </li>
           ))
         ) : (
           <li>... you fell for the Cowplant cake? Seriously. There was a game about it.</li>
         )}
       </ul>
       <button onClick={() => navigate('/SurvivalGuide')}>↩ Return to Guide</button>
     </div>
  );
};

export default Fauna;

