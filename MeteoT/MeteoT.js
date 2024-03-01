const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getWeather };
