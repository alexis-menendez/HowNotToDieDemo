// file path: how-not-to-die/client/src/components/vera-quotes/VeraNoTravelQuote.jsx

import React from 'react';

const quotes = {
  1: "Umm.... No. We are not going there. You saw that creepy message. Do you have a death wish?",
  2: "Oh come on... really? REALLY??? Please do not do this.",
  3: "I hate you."
};

const VeraNoTravelQuote = ({ stage }) => {
  return <p>{quotes[stage]}</p>;
};

export default VeraNoTravelQuote;
