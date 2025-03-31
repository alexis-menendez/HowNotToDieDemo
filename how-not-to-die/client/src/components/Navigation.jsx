// file path: how-not-to-die/client/src/components/Navigation.jsx
// Side nav bar

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../assets/css/Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navColumn}>
      <Link
        to="/"
        className={`${styles.navButton} ${isActive('/') ? styles.active : ''}`}
        >
        Sign In
        {isActive('/') && <span className={styles.star}> ✦</span>}
      </Link>
      <Link
        to="/dashboard"
        className={`${styles.navButton} ${isActive('/dashboard') ? styles.active : ''}`}
        >
        Command Center
        {isActive('/dashboard') && <span className={styles.star}> ✦</span>}
      </Link>
      <Link
        to="/personallogs"
        className={`${styles.navButton} ${isActive('/personallogs') ? styles.active : ''}`}
        >
        Personal Logs
        {isActive('/personallogs') && <span className={styles.star}> ✦</span>}
      </Link>
      <Link
        to="/survivalguide"
        className={`${styles.navButton} ${isActive('/survivalguide') ? styles.active : ''}`}
        >
        Survival Guide
        {isActive('/survivalguide') && <span className={styles.star}> ✦</span>}
      </Link>
      <Link
        to="/planettravel"
        className={`${styles.navButton} ${isActive('/planettravel') ? styles.active : ''}`}
        >
        Galaxy Map
        {isActive('/planettravel') && <span className={styles.star}> ✦</span>}
      </Link>
    </nav>
  );
};

export default Navigation;

