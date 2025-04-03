// file path: how-not-to-die/client/src/components/vera-quotes/VeraDoubtQuote.jsx

import React, { useEffect, useState } from 'react';

const quotes = [

  "Do you have any doubts? You should.",
  "Doubt. A lovely vacation spot, if you enjoy heatstroke and dehydration.",
  "Surface scans show more sand than a self-respecting planet should legally have. Welcome to Doubt.",

];

const VeraDoubtQuote = () => {
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

export default VeraDoubtQuote;
