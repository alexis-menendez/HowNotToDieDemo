// file path: how-not-to-die/client/src/pages/PublicLogVoting.jsx

import React, { useState } from 'react';
import AnimatedVeraQuote from '../components/vera-quotes/AnimatedVeraQuote';
import styles from '../assets/css/public-log-voting/PublicLogs.module.css';

const sampleQuote =
  "Welcome, Commander. Review these logs. Some may help. Others... well...";

  // These are sample logs. In a real application, we would fetch these from a server after users uploaded them for review.
const mockLogs = [
  {
    id: 1,
    username: 'Dr. Lyra Voss',
    planet: 'Doubt',
    title: 'Mushroom Compass',
    body: 'Spore trails always point east. Handy for orientation.',
    votes: 9,
  },
  {
    id: 2,
    username: 'Cadet Ishaan',
    planet: 'Brune',
    title: 'Flaming Beetle Protocol',
    body: 'If it glows and hisses, throw salt—not water.',
    votes: 4,
  },
  {
    id: 3,
    username: 'Juno the Bold',
    planet: 'Ocean 12B',
    title: 'Don’t Trust the Singing Rock',
    body: 'It hums lullabies. They are lies. You will sleep forever.',
    votes: 1,
  },
];

const PublicLogVoting = () => {
  const [logs, setLogs] = useState(mockLogs);

  const handleVote = (id, delta) => {
    const updated = logs.map(log =>
      log.id === id ? { ...log, votes: log.votes + delta } : log
    );
    setLogs(updated);
  };

  return (
    <div className={styles.container}>
      <h2>Public Log Submissions</h2>
      <AnimatedVeraQuote quote={sampleQuote} />

      <p className={styles.instructions}>
        Vote on which logs should be added to the official Survival Guide.
      </p>

      {logs.map(log => (
        <div key={log.id} className={styles.logCard}>
          <div className={styles.logHeader}>
            <span className={styles.username}>👤 {log.username}</span>
            <span className={styles.planet}>🪐 {log.planet}</span>
          </div>

          <h3 className={styles.subtitle}>{log.title}</h3>

          <p className={styles.body}>{log.body}</p>

          <div className={styles.voteControls}>
            <button onClick={() => handleVote(log.id, 1)}>⬆ Upvote</button>
            <span className={styles.voteCount}>{log.votes}</span>
            <button onClick={() => handleVote(log.id, -1)}>⬇ Downvote</button>
          </div>

          <button
            className={styles.submitButton}
            disabled={log.votes < 5}
          >
            {log.votes >= 5 ? 'Submit to Survival Guide' : 'Not Enough Votes'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PublicLogVoting;
