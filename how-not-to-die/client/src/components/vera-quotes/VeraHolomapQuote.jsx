// file path: how-not-to-die/src/components/vera-quotes/VeraHolomapQuote.jsx
// VERA speaks when the holomap is active

import React, { useEffect, useState } from 'react';

const holomapQuotes = [
  "There are only a few planets in this system, but infinite ways to die. Choose wisely.",
  "Holomap projection active. Please try to avoid sending us into a worm hole this time.",
  "Do you actually have a destination, or are we just clicking things at random again?",
];

const VeraHolomapQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * holomapQuotes.length);
    setQuote(holomapQuotes[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', margin: '1rem 0' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraHolomapQuote;
