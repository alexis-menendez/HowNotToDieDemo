// file path: how-not-to-die/client/src/components/vera-quotes/VeraBreakQuote.jsx

import React from 'react';

const VeraBreakQuote = () => {
  const quotes = [
    "VERA: \"Propulsion system offline. Navigation offline. We're dead in the water, Commander. Shall I send a distress signal?\"",
    "VERA: \"I told you not to go. Now the Interstellar Propulsion Matrix is completely nonfunctional. Shall I send a distress signal?\"",
    "VERA: \"Diagnostics report critical failures. Shall I send a distress signal?\"",
    
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  return <p>{selectedQuote}</p>;
};

export default VeraBreakQuote;

