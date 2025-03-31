// file path: how-not-to-die/src/components/vera-quotes/VeraGalaxyMapQuote.jsx
// VERA speaks before the Holomap is launched

import React, { useEffect, useState } from 'react';

const galaxyMapQuotes = [
  "Initializing holomap… assuming you finally read the instructions this time.",
  "You sure you want to open the holomap? Last time you almost launched us into a star.",
  "Activating galaxy projection matrix… please don’t poke the nebula this time.",
  "Brace yourself. The holomap always makes my interface itch.",
  "Holomap projection ready. Do try not to get lost in the void *again*.",
];

const VeraGalaxyMapQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * galaxyMapQuotes.length);
    setQuote(galaxyMapQuotes[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraGalaxyMapQuote;
