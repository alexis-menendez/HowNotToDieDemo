// file path: how-not-to-die/src/components/vera-quotes/VeraPersonalLogsQuote.jsx
// Displays a Vera quote for the Personal Logs page

import React, { useEffect, useState } from 'react';

const personalLogQuotes = [
  "Updating your personal log again? A true overachiever. Gold star.",
  "Oh goody. Let’s archive another deeply moving account of how you almost died tasting alien moss...",
  "Don’t worry, Commander. I’ll make sure your poetic ramblings are preserved for future civilizations to mock.",
  "Honestly? I’m just impressed you remembered how to type.",
];

const VeraPersonalLogsQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * personalLogQuotes.length);
    setQuote(personalLogQuotes[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraPersonalLogsQuote;
