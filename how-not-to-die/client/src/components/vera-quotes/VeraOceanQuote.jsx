// file path: how-not-to-die/src/components/vera-quotes/VeraOceanQuote.jsx

import React, { useEffect, useState } from 'react';

const quotes = [
  "Ocean 12B. No data, no land, and a ghost ship still crying out. Sounds like a great place for a swim, doesn't it?",
];

const VeraOceanQuote = () => {
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

export default VeraOceanQuote;
