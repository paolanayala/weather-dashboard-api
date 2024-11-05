import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (_req, res) => {
  try {
    const cityName = await HistoryService.getCities();
    res.json(cityName);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
  // TODO: GET weather data from city name
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (req, res) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
