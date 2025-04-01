import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
  // TODO: GET weather data from city name
  try {
    const cityName: string = req.body.cityName;
    console.log("Trying to find weather for city:", cityName);

    if (!cityName) {
      return res.status(400).json({ error: 'City name is required' });
    }

    const weatherData = await WeatherService.getWeatherForCity(cityName);

    // Save city to search history
    await HistoryService.addCity(cityName);

    return res.json(weatherData);
  } catch (error) {
    console.error('Error retrieving weather data:', error);
    return res.status(500).json({ error: 'Failed to retrieve weather data' });
  }
});

// GET weather data from search history
router.get('/history', async (_req, res) => {
  try {
    const history = await HistoryService.getCities();
    res.json(history);
  } catch (error) {
    console.error('Error retrieving search history:', error);
    res.status(500).json({ error: 'Failed to retrieve search history' });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'City ID is required' });
    }

    await HistoryService.removeCity(id);
    return res.json({ message: 'City removed from search history' });
  } catch (error) {
    console.error('Error removing city from search history:', error);
    return res.status(500).json({ error: 'Failed to remove city from search history' });
  }
});

export default router;
