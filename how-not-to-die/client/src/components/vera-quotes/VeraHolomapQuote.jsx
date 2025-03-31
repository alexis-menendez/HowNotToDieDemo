// file path: how-not-to-die/src/components/vera-quotes/VeraHolomapQuote.jsx
// VERA speaks when the holomap is active

import React, { useEffect, useState } from 'react';

const holomapQuotes = [
  "Welcome to the galaxy map. Please refrain from randomly clicking planets you don’t understand.",
  "Three planets, infinite ways to die. Choose wisely.",
  "Holomap projection active. Please avoid navigating into known supernovae.",
  "Do you actually have a destination, or are we just clicking things at random?",
  "Please remember: VERA is not responsible for reckless exploration decisions.",
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
