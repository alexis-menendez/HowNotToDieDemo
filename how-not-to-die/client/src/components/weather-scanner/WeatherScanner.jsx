//file path: how-not-to-die/client/src/components/weather-scanner/WeatherScanner.jsx
// "Glitchy" weather tool component (shows weather on earth, connects to weather API)

import { useState } from 'react';
import styles from '../../assets/css/weather-scanner/WeatherScanner.module.css';

const WeatherScanner = ({ isOpen, onClose }) => {
  const [planetName, setPlanetName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your weather API key and endpoint
      const apiKey = 'c42f7d709975a885188553256b0f5f45';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${planetName}&appid=${apiKey}&units=imperial`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data. Please check the planet name.');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <header className={styles.header}>
          <h1>🌤️ SkyWatch - Planetary Weather Scanner</h1>
        </header>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <h2>Search for a Planet</h2>
            <form className={styles.form} onSubmit={fetchWeather}>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Planet Name"
                value={planetName}
                onChange={(e) => setPlanetName(e.target.value)}
              />
              <button className={styles.searchButton} type="submit">Search</button>
            </form>
            <div className={styles.history}>
              {/* Search history can be implemented here */}
            </div>
          </aside>

          <main className={styles.weatherInfo}>
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {weatherData && (
              <section className={styles.today}>
                <h2>Weather on {weatherData.name}</h2>
                <img
                  className={styles.weatherImg}
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt={weatherData.weather[0].description}
                />
                <p>Temperature: {weatherData.main.temp} °F</p>
                <p>Wind: {weatherData.wind.speed} MPH</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
              </section>
            )}
            <section className={styles.forecast}>
              {/* 5-day forecast cards can be implemented here */}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default WeatherScanner;