// file path: how-not-to-die/client/src/components/holomap/PlanetLockLogic.jsx

import React, { createContext, useContext, useState } from 'react';

const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [visitedPlanets, setVisitedPlanets] = useState([]);

  const markPlanetVisited = (planetKey) => {
    setVisitedPlanets((prev) =>
      prev.includes(planetKey) ? prev : [...prev, planetKey]
    );
  };

  const hasVisited = (planetKey) => visitedPlanets.includes(planetKey);

  const isPlanetThreeUnlocked = () =>
    visitedPlanets.includes('planetone') && visitedPlanets.includes('planettwo');

  return (
    <PlanetContext.Provider
      value={{ visitedPlanets, markPlanetVisited, hasVisited, isPlanetThreeUnlocked }}
    >
      {children}
    </PlanetContext.Provider>
  );
};

export const usePlanetTracker = () => useContext(PlanetContext);
