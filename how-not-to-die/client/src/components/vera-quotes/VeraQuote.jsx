// file path: how-not-to-die/client/src/components/vera-quotes/VeraQuote.jsx
// Display a random Vera quote

// need to figure out how to seperate this by page/Alexis
import React, { useEffect, useState } from 'react';

const veraQuotes = [
  "QUOTES GO HERE",
];
// No pages are currently calling to this, will update later/Alexis

const VeraQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * veraQuotes.length);
    setQuote(veraQuotes[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraQuote;
