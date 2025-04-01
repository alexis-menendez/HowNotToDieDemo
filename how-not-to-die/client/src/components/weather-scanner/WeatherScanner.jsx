// file path: how-not-to-die/client/src/components/weather-scanner/WeatherScanner.jsx
// "Glitchy" weather tool component (shows weather on earth, connects to weather API)

// file path: how-not-to-die/client/src/components/WeatherScanner.jsx

import React, { useState } from 'react';
import styles from '../../assets/css/weather-scanner/WeatherScanner.module.css';

const WeatherScanner = ({ isOpen, onClose }) => {
  const [showPreview, setShowPreview] = useState(false);

  if (!isOpen) return null;

  const mockWeather = {
    city: 'San Diego',
    temperature: '72°F',
    wind: '5 MPH',
    humidity: '60%',
    icon: '☀️',
  };

  const mockForecast = [
    { day: 'Mon', temp: '70°F', icon: '☀️' },
    { day: 'Tue', temp: '68°F', icon: '🌤️' },
    { day: 'Wed', temp: '65°F', icon: '🌧️' },
    { day: 'Thu', temp: '67°F', icon: '☁️' },
    { day: 'Fri', temp: '69°F', icon: '🌤️' },
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <header className={styles.header}>
          <h1>SkyWatch - Planetary Weather Scanner</h1>
        </header>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <h2>Search for a City</h2>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="San Diego"
              />
              <button className={styles.searchButton} type="submit">Search</button>
            </form>

            <button
              className={styles.previewButton}
              onClick={() => setShowPreview(true)}
            >
              🔍 Preview Mock Data
            </button>

            <div className={styles.history}>
              {/* Search history will go here */}
            </div>
          </aside>

          <main className={styles.weatherInfo}>
            {showPreview && (
              <>
                <section className={styles.today}>
                  <h2>Weather in {mockWeather.city}</h2>
                  <p>{mockWeather.icon}</p>
                  <p>Temperature: {mockWeather.temperature}</p>
                  <p>Wind: {mockWeather.wind}</p>
                  <p>Humidity: {mockWeather.humidity}</p>
                </section>

                <section className={styles.forecast}>
                  {mockForecast.map((day, index) => (
                    <div key={index} className={styles.forecastCard}>
                      <p>{day.day}</p>
                      <p>{day.icon}</p>
                      <p>{day.temp}</p>
                    </div>
                  ))}
                </section>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default WeatherScanner;
