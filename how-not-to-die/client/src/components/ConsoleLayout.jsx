// how-not-to-die/client/src/components/ConsoleLayout.jsx
import React from 'react';
import styles from '../assets/css/ConsoleLayout.module.css';

// ConsoleLayout.jsx
const ConsoleLayout = ({ navigation, children }) => {
  return (
   <div className={styles.consoleBackground}>
      <div className={styles.consoleScreen}>
        <div className={styles.consoleContent}>
          <div className={styles.navColumn}>{navigation}</div>
          <div className={styles.pageContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleLayout;
