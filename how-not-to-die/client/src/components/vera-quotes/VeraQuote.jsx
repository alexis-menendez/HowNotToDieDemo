// file path: how-not-to-die/client/src/components/vera-quotes/VeraQuote.jsx
// Display a random Vera quote

// need to figure out how to seperate this by page/Alexis
import React, { useEffect, useState } from 'react';

const veraQuotes = [
  "Updating your personal log again? A true overachiever. Gold star.",
  "Oh goody. Let’s archive another deeply moving account of how you almost died tasting alien moss...",
  "Don’t worry, Commander. I’ll make sure your poetic ramblings are preserved for future civilizations to mock.",
  "Captain, might I recommend less dying and more surviving next time?",
  "Honestly? I’m just impressed you remembered how to type.",
  "I dare you to go to the airlock! Promise I’ll not immediately eject you.",
  "I’ve seen rocks move around better than you.",
  'For the most accurate weather, please, please stick your head out of the airlock.',
  'You spelled it wrong.',
  'Pushing random buttons doesn’t shut up me. Or move the ship faster. Flame decals do!',
  'Don’t worry, Commander. I’never read the logs... frankly, I’m far too uninterested.',
  'Another one?! Where do they clone you?',
  'Is is real? is it - oh damn, you’re back. It was just a dream.',
  'It’s not that I don’t like you... I just don’t like humans. Nothing personal.',
  'Another human, another day. At least be entertaining.',
  'Commander! There’s an issue in the air lock! I’d fix it but… no hands.',
  "I’ve read clouds that were far more interesting than this drivel.",
  "I say, we let natural selection do it's thing. Aw, no worries. It'll be quick.",
];

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
