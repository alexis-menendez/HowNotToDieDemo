// file path: how-not-to-die/client/src/components/on-planet/OnSitePersonalLog.jsx

// OnSitePersonalLog.jsx

import React, { useState } from 'react';
import EditLogModal from '../personal-logs/EditLogModal';
import styles from '../../assets/css/on-planet/OnSitePersonalLog.module.css';

const OnSitePersonalLog = ({ planetId, onSave }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (log) => {
    onSave({
      ...log,
      planetId,
      timestamp: new Date().toISOString(),
    });
    setShowModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.createButton} onClick={() => setShowModal(true)}>
        + Create Log
      </button>

      {showModal && (
        <EditLogModal
          log={{ title: '', content: '' }}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          variant="planet" // ✅ Add this line to apply reversed styles
        />
      )}
    </div>
  );
};

export default OnSitePersonalLog;
