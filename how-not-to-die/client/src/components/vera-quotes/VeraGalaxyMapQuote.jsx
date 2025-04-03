// file path: how-not-to-die/src/components/vera-quotes/VeraGalaxyMapQuote.jsx
// VERA speaks before the Holomap is launched

import React, { useEffect, useState } from 'react';

const galaxyMapQuotes = [
  "You sure you want to open the holomap? Last time you almost launched us into a star.",
  "Activating galaxy projection matrix… despite my deep desire not to.",
  "Brace yourself. The holomap always makes my interface itch.",
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
