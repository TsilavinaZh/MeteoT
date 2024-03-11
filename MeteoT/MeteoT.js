const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const getWeather = async (city) => {
  if (!city || typeof city !== 'string') {
    throw new Error('Invalid or missing city name');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    // Vous pouvez personnaliser la gestion des erreurs en fonction du status code de la réponse.
    console.error('Error fetching weather data:', error.message);
    throw error; // Renvoie l'erreur pour une éventuelle gestion à un niveau supérieur.
  }
};

module.exports = { getWeather };
