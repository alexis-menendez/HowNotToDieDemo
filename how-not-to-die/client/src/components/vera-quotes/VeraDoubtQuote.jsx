// file path: how-not-to-die/client/src/components/vera-quotes/VeraDoubtQuote.jsx

import React, { useEffect, useState } from 'react';

const quotes = [

  "Do you have any doubts? You should.",
  "Doubt. A lovely vacation spot, if you enjoy heatstroke, dehydration, and sunsets that make you question your existence.",
  "Surface scans show more sand than a self-respecting planet should legally have. Welcome to Doubt.",
  "Ah yes, Doubt. Where the sunsets are stunning and the chance of survival is... statistically low.",

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
