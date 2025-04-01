// file path: how-not-to-die/src/components/vera-quotes/VeraOceanQuote.jsx

import React, { useEffect, useState } from 'react';

const quotes = [
  "Ocean 12B. No data, no land, and a ghost ship still crying out. Sounds like a great place for a swim, doesn't it?",
  "Scanners picked up nothing. Except the screaming. But otherwise, very peaceful.",
  "Ocean 12B. Bioluminescent. Beautiful. Potentially cursed. Proceed with existential caution.",
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
