const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = 3001;

const weatherAPIKey = process.env.OPEN_WEATHER_API_ID;
console.log(weatherAPIKey);
const weatherAPIEndpoint = 'https://api.openweathermap.org/data/2.5';

app.use(cors());
app.use(express.json());

app.get('/api/weather', async (req, res) => {
  try {
    const location = req.query.location;
    const weatherResponse = await axios.get(`${weatherAPIEndpoint}/weather`, {
      params: {
        q: location,
        appid: weatherAPIKey,
        units: 'metric',
      },
    });

    const weatherData = weatherResponse.data;

    if (weatherData.cod !== '404') {
      const forecastResponse = await axios.get(`${weatherAPIEndpoint}/forecast`, {
        params: {
          q: location,
          appid: weatherAPIKey,
          units: 'metric',
        },
      });

      const forecastData = forecastResponse.data;

      const responseData = {
        current: {
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
        },
        forecast: forecastData.list.map((item) => ({
          date: item.dt_txt,
          temperature: item.main.temp,
          description: item.weather[0].description,
        })),
      };

      res.json(responseData);
    } else {
      res.status(404).json({ error: 'Location not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
