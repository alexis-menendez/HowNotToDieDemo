// file path: how-not-to-die/src/components/vera-quotes/VeraBruneQuote.jsx

import React, { useEffect, useState } from 'react';

const quotes = [
  "Brune. Cloudy, cold, and full of cliffs. I suggest climbing gear... and a therapist.",
  "If you fall off a ledge here, just know I'll mark your last known location with a tasteful icon.",
  "Brune. Where your footing is questionable and the air is thin — much like your survival instincts.",
  "If you ever wanted to replicate that titanic scene, I do have a recommended spot.",
  "The last pilot lasted 5 days, 3 hours and 42 minutes. I forgot the code to unlock the door.",
  "If you don't like cllimbing... why not cave? Lots of lot there. Becareful of treasure chest... they like to mimic.",

];

const VeraBruneQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const i = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[i]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraBruneQuote;
