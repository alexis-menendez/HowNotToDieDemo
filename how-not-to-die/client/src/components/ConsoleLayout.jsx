// how-not-to-die/client/src/components/ConsoleLayout.jsx
import React from 'react';
import styles from '../assets/css/ConsoleLayout.module.css';

const ConsoleLayout = ({ children }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src="/assets/images/ConsoleDesktop.png"
          className={`${styles.consoleImage} ${styles.desktopOnly}`}
          alt="console"
        />
        <img
          src="/assets/images/ConsoleTablet.png"
          className={`${styles.consoleImage} ${styles.tabletOnly}`}
          alt="console"
        />
        <img
          src="/assets/images/ConsoleMobile.png"
          className={`${styles.consoleImage} ${styles.mobileOnly}`}
          alt="console"
        />
        <div className={styles.consoleScreen}>
          <div className={styles.consoleContent}>
            <div className={styles.navColumn}>
              {/* Navigation gets passed in here by LayoutRouter */}
              {children.find?.(child => child.type?.name === 'Navigation') || null}
            </div>
            <div className={styles.pageContent}>
              {children.filter?.(child => child.type?.name !== 'Navigation') || children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleLayout;
