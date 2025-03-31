// file path: how-not-to-die/client/src/pages/CommsPage.jsx

import React, { useState } from 'react';
import styles from '../assets/css/comms/CommsPage.module.css';
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';

const sampleQuote = "Private channels are not monitored. Probably.";

const initialThreads = [
  {
    username: 'Dr. Lyra Voss',
    hasNew: true,
    messages: [
      { sender: 'Dr. Lyra Voss', content: 'Are you still receiving telemetry?', timestamp: '07:32' },
      { sender: 'You', content: 'Telemetry is noisy, but functional.', timestamp: '07:34' },
    ]
  },
  {
    username: 'Cadet Ishaan',
    hasNew: false,
    messages: [
      { sender: 'You', content: 'Arrived on planet surface.', timestamp: '10:15' },
      { sender: 'Cadet Ishaan', content: 'Copy that. Watch for spores.', timestamp: '10:17' },
    ]
  },
  {
    username: 'Juno the Bold',
    hasNew: true,
    messages: [
      { sender: 'Juno the Bold', content: 'Did you hear the rock hum?', timestamp: '08:00' },
    ]
  },
];

const CommsPage = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [activeUser, setActiveUser] = useState(null);
  const [input, setInput] = useState('');

  const handleSelectUser = (username) => {
    const updatedThreads = threads.map(thread =>
      thread.username === username ? { ...thread, hasNew: false } : thread
    );
    setThreads(updatedThreads);
    setActiveUser(username);
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    const updatedThreads = threads.map(thread => {
      if (thread.username === activeUser) {
        return {
          ...thread,
          messages: [
            ...thread.messages,
            {
              sender: 'You',
              content: input,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]
        };
      }
      return thread;
    });
    setThreads(updatedThreads);
    setInput('');
  };

  const handleReturn = () => {
    setActiveUser(null);
  };

  const activeThread = threads.find(t => t.username === activeUser);

  return (
    <div className={styles.commsWrapper}>
      <h2>Comms Console</h2>
      <AnimatedVeraQuote quote={sampleQuote} />

      {!activeUser ? (
        <div className={styles.threadList}>
          {threads.map(thread => (
            <button
              key={thread.username}
              className={styles.threadButton}
              onClick={() => handleSelectUser(thread.username)}
            >
              {thread.username}
              {thread.hasNew && <span className={styles.newBadge}> 🟢 NEW</span>}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.chatSection}>
          <div className={styles.chatLog}>
            {activeThread.messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.sender === 'You' ? styles.self : styles.other}`}>
                <span className={styles.meta}>{msg.sender} @ {msg.timestamp}</span>
                <p>{msg.content}</p>
              </div>
            ))}
          </div>

          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Reply</button>
            <button onClick={handleReturn}>← Return to Messages</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommsPage;
