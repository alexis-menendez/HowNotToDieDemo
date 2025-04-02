// file path: how-not-to-die/client/src/components/LayoutRouter.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ConsoleLayout from './ConsoleLayout';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import CommsPage from '../pages/CommsPage';
import SurvivalGuide from '../pages/SurvivalGuide';
import PersonalLogs from '../pages/PersonalLogs';
import PublicLogVoting from '../pages/PublicLogVoting';
import PlanetTravel from '../pages/PlanetTravel';
import Holomap from '../pages/Holomap';
import TravelAnimation from '../pages/TravelAnimation';
import PlanetOne from '../pages/PlanetOne';
import PlanetTwo from '../pages/PlanetTwo';
import ShuttleBreak from '../pages/ShuttleBreak';
import LifeSupport from '../pages/ship-functions/LifeSupport';
import Comms from '../pages/ship-functions/Comms';
import ShipNav from '../pages/ship-functions/ShipNav';
import Propulsion from '../pages/ship-functions/Propulsion';
import EndDemo from '../pages/EndDemo';
import Brune from '../pages/survival/Brune';
import Flora from '../pages/survival/Flora';
import LandingSpot from '../pages/survival/Landingspot';
import Unexplained from '../pages/survival/Unexplained';
import Fauna from '../pages/survival/Fauna';


const LayoutRouter = () => {
  const location = useLocation();
  const isPlanetView =
    location.pathname === '/holomap' ||
    location.pathname === '/travel' ||
    location.pathname === '/planetone' ||
    location.pathname === '/planettwo' ||
    location.pathname === '/enddemo';

  return (
    <>
      {isPlanetView ? (
        <Routes>
          <Route path="/planetone" element={<PrivateRoute><PlanetOne /></PrivateRoute>} />
          <Route path="/planettwo" element={<PrivateRoute><PlanetTwo /></PrivateRoute>} />
          <Route path="/holomap" element={<PrivateRoute><Holomap /></PrivateRoute>} />
          <Route path="/travel" element={<PrivateRoute><TravelAnimation /></PrivateRoute>} />
          <Route path="/enddemo" element={<PrivateRoute><EndDemo /></PrivateRoute>} />
        </Routes>
      ) : (
        <ConsoleLayout navigation={<Navigation />}>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/commspage" element={<PrivateRoute><CommsPage /></PrivateRoute>} />
            <Route path="/survivalguide" element={<PrivateRoute><SurvivalGuide /></PrivateRoute>} />
            <Route path="/personallogs" element={<PrivateRoute><PersonalLogs /></PrivateRoute>} />
            <Route path="/publiclogvoting" element={<PrivateRoute><PublicLogVoting /></PrivateRoute>} />
            <Route path="/planettravel" element={<PrivateRoute><PlanetTravel /></PrivateRoute>} />
            <Route path="/shuttlebreak" element={<PrivateRoute><ShuttleBreak /></PrivateRoute>} />
            <Route path="/lifesupport" element={<PrivateRoute><LifeSupport /></PrivateRoute>} />
            <Route path="/comms" element={<PrivateRoute><Comms /></PrivateRoute>} />
            <Route path="/shipnav" element={<PrivateRoute><ShipNav /></PrivateRoute>} />
            <Route path="/propulsion" element={<PrivateRoute><Propulsion /></PrivateRoute>} />
            <Route path="/brune" element={<PrivateRoute><Brune /></PrivateRoute>} />
            <Route path="/flora" element={<PrivateRoute><Flora /></PrivateRoute>} />
            <Route path="/landingspot" element={<PrivateRoute><LandingSpot /></PrivateRoute>} />
            <Route path="/unexplained" element={<PrivateRoute><Unexplained /></PrivateRoute>} />
            <Route path="/fauna" element={<PrivateRoute><Fauna /></PrivateRoute>} />

          </Routes>
        </ConsoleLayout>
      )}
    </>
  );
};

export default LayoutRouter;
