// file path: how-not-to-die/src/pages/vera-quotes/VeraPlanetMessages.jsx
// shows messages from Vera on Planet pages

import React, { useEffect, useState } from 'react';
import styles from '../../assets/css/vera-quotes/VeraPlanetMessage.module.css';

const veraPlanetMessages = [
'We’ve arrived, Commander. Environmental scan complete. Nothing immediately deadly… unless you count the terrain, the weather, the plants, and the general overall vibes.',
'We are here. This planet features breathtaking views, questionable fungi, and a 62% chance of regret.',
'Ok we’ve arrived. Can we go back to the ship now? I’m bored.',
"We're here. Congratulations on choosing the most deadly planet in the system. Bold move, Commander.",
"We have arrived. I’ve already calculated twenty-seven different ways this place could kill us. New record!",
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