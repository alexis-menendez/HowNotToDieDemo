// file path: how-not-to-die/src/components/vera-quotes/VeraSurvivalGuideQuote.jsx
// Displays a Vera quote for the Survival Guide page

import React, { useEffect, useState } from 'react';

const survivalQuotes = [
  "Ah, the Survival Guide... because *winging it* didn’t go so well on Planet Doubt.",
  "Another cheerful entry in the ‘How Not to Die’ series. Spoiler: most of you ignore it.",
  "If you actually read this, congratulations. You're already in the top 5% of explorers.",
  "Let me guess — you're trying to find out if that glowing mushroom is edible.",
  "Reading the survival guide *before* poking the alien wildlife? Bold move.",
];

const VeraSurvivalGuideQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * survivalQuotes.length);
    setQuote(survivalQuotes[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraSurvivalGuideQuote;
