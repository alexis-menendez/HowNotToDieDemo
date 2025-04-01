// file path: how-not-to-die/client/src/components/weather-scanner/WeatherScanner.jsx
// "Glitchy" weather tool component (shows weather on earth, connects to weather API)

// This is the weather scanner without the mock data in it. /Alexis

//import React from 'react';
//import styles from '../assets/css/weather-scanner/WeatherScanner.module.css';

//const WeatherScanner = ({ isOpen, onClose }) => {
//  if (!isOpen) return null;

//  return (
//    <div className={styles.modalOverlay}>
//      <div className={styles.modalContent}>
//        <button className={styles.closeButton} onClick={onClose}>✖</button>
//        <header className={styles.header}>
//          <h1>🌤️ SkyWatch - Planetary Weather Scanner</h1>
//        </header>

//        <div className={styles.container}>
//          <aside className={styles.sidebar}>
//            <h2>Search for a City</h2>
//            <form className={styles.form}>
//              <input
//                className={styles.input}
//                type="text"
//                placeholder="San Diego"
//              />
//              <button className={styles.searchButton} type="submit">Search</button>
//            </form>
//            <div className={styles.history}>
//              {/* Search history will go here */}
//            </div>
//          </aside>
//
//          <main className={styles.weatherInfo}>
//            <section className={styles.today}>
//              <h2>Search for a city!</h2>
//              <img className={styles.weatherImg} alt="weather icon" />
//              <p>Temperature: °F</p>
//              <p>Wind: MPH</p>
//              <p>Humidity: %</p>
//            </section>
//            <section className={styles.forecast}>
//              {/* 5-day forecast cards will go here */}
//            </section>
//          </main>
//        </div>
//      </div>
//    </div>
//  );
//};

//export default WeatherScanner;