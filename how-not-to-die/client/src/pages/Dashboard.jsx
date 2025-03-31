// file path: how-not-to-die/client/src/pages/Dashboard.jsx

import React from 'react';
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';

const Dashboard = () => {
  const sampleQuote = "Welcome, Commander. All systems online. I assume you'll be pressing random buttons until something breaks?";

  return (
    <>
      <h2>Welcome, Commander</h2>

      {/* VERA animated quote */}
      <AnimatedVeraQuote quote={sampleQuote} />
    </>
  );
};

export default Dashboard;
