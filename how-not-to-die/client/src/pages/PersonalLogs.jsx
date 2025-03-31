// file path: how-not-to-die/src/pages/PersonalLogs.jsx
// View/edit user’s own logs

import React, { useState } from 'react';
import styles from '../assets/css/personal-logs/PersonalLogs.module.css';
import EditLogModal from '../components/personal-logs/EditLogModal';
// Replacing VeraPersonalLogsQuote:
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';

const PersonalLogs = () => {
  const [logs, setLogs] = useState([
    { id: 1, title: 'First Contact', content: 'Met something with three eyes. It waved.' },
    { id: 2, title: 'Oxygen Leak', content: 'Woke up light-headed. Fixed the seal with chewing gum.' }
  ]);

  const [editingLog, setEditingLog] = useState(null);

  const handleEdit = (log) => {
    setEditingLog(log);
  };

  const handleCloseModal = () => {
    setEditingLog(null);
  };

  const handleSaveLog = (updatedLog) => {
    if (updatedLog.id) {
      // Existing log
      const updatedLogs = logs.map(log =>
        log.id === updatedLog.id ? updatedLog : log
      );
      setLogs(updatedLogs);
    } else {
      // New log
      const newLog = {
        ...updatedLog,
        id: Date.now(),
      };
      setLogs([...logs, newLog]);
    }

    setEditingLog(null);
  };

  const handleDeleteLog = (idToDelete) => {
    const filteredLogs = logs.filter(log => log.id !== idToDelete);
    setLogs(filteredLogs);
  };

  return (
    <div className={styles.container}>
      <h2>Personal Logs</h2>

      {/* Replace static quote with animated VERA component */}
      <AnimatedVeraQuote quote="Updating your personal log again? A true overachiever. Gold star." />

      <button className={styles.newLogButton} onClick={() => setEditingLog({ title: '', content: '' })}>
        + New Log
      </button>

      <div className={styles.logList}>
        {logs.map((log) => (
          <div key={log.id} className={styles.logCard}>
            <h3>{log.title}</h3>
            <p>{log.content}</p>
            <button onClick={() => handleEdit(log)}>Edit</button>
            <button onClick={() => handleDeleteLog(log.id)}>Delete</button>
          </div>
        ))}
      </div>

      {editingLog && (
        <EditLogModal
          log={editingLog}
          onClose={handleCloseModal}
          onSave={handleSaveLog}
        />
      )}
    </div>
  );
};

export default PersonalLogs;
