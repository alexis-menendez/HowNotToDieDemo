// file path: how-not-to-die/client/src/components/personal-logs/EditLogModal.jsx
// edit personal logs

// EditLogModal.jsx
import React, { useState } from 'react';
import styles from '../../assets/css/personal-logs/PersonalLogs.module.css';

const EditLogModal = ({ log, onClose, onSave, variant }) => {
  const [title, setTitle] = useState(log.title || '');
  const [content, setContent] = useState(log.content || '');
  const isPlanet = variant === 'planet';

  const handleSave = () => {
    onSave({ ...log, title, content });
  };

  return (
    <div className={`${styles.modal} ${isPlanet ? styles.planetMode : ''}`}>
      <h3>{log.id ? 'Edit Log' : 'New Log'}</h3>
      <label>
        Title:
        <input
          type="text"
          className={isPlanet ? styles.planetInput : ''}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          className={isPlanet ? styles.planetInput : ''}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditLogModal;
