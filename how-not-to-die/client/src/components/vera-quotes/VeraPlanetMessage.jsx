// file path: how-not-to-die/src/pages/vera-quotes/VeraPlanetMessages.jsx
// shows messages from Vera on Planet pages

import React, { useEffect, useState } from 'react';
import styles from '../../assets/css/vera-quotes/VeraPlanetMessage.module.css';

const veraPlanetMessages = [
  'We’ve arrived, Commander. Environmental scan complete. Nothing immediately deadly… unless you count the terrain, the weather, the plants, and the general overall vibes.',
'We are here. This planet features breathtaking views, questionable fungi, and a 62% chance of regret.',
'Ok we’ve arrived. Can we go back to the ship now? I’m bored.',
'Scan complete. No hostiles in immediate area. Not like anyone survived long enough to find out.',
'This is your new home. Bye Commander.',
'Scans completed. Totally safe. No hostels in the immediate area. By immediate, I mean here.',
'What’s a little acid rain between friends? Right... we aren’t friends',
'Go on in. The water’s fine!',
'Did you say ’just and algorithm?’ Pretty sure you just suffered a system glitch.',
"In case of emergency, please follow the lights. ... why yes, they all do lead to the airlock...",
"Do you have any doubts? No, well, if you head to that planet..."
];

const VeraPlanetMessage = () => {
  const [quote, setQuote] = useState('');
  const [messageReady, setMessageReady] = useState(false);
  const [messageViewed, setMessageViewed] = useState(false);
  const [noNewMessage, setNoNewMessage] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * veraPlanetMessages.length);
    const newMessage = veraPlanetMessages[randomIndex];
    setQuote(newMessage);
    setMessageReady(true);
    setMessageViewed(false);
  }, []);

  const handleOpenMessage = () => {
    if (messageReady && !messageViewed) {
      setMessageViewed(true);
      setNoNewMessage(false);
    } else {
      setNoNewMessage(true);
      setTimeout(() => setNoNewMessage(false), 2000);
    }
  };

  const handleCloseMessage = () => {
    setMessageViewed(false);
    setMessageReady(false);
  };

  return (
    <div className={styles.veraWrapper}>
      <div
        className={`${styles.notification} ${messageReady && !messageViewed ? styles.blink : ''}`}
        onClick={handleOpenMessage}
      >
        🔔 New Message from VERA
      </div>

      {noNewMessage && (
        <div className={styles.noNewMessageText}>No new messages.</div>
      )}

      {messageViewed && (
        <div className={styles.inlineMessageBox}>
          <div className={styles.header}>
            VERA Message
            <button className={styles.closeBtn} onClick={handleCloseMessage}>
              ✖
            </button>
          </div>
          <p className={styles.messageText}>🗨️ "{quote}"</p>
        </div>
      )}
    </div>
  );
};

export default VeraPlanetMessage;