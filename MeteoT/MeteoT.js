const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env; // Destructured for direct usage

/**
 * Fetches the weather data for a given city.
 * @param {string} city - The city for which to fetch the weather.
 * @returns {Promise<Object>} The weather data.
 */
const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    // Improved error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      // that is not in the range of 2xx
      console.error(`Server responded with status code ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('The request was made but no response was received');
    } else {
      // Something else caused the request to fail
      console.error('Error making the request:', error.message);
    }
    throw error; // Rethrowing the error to be handled or logged by the caller
  }
};

module.exports = { getWeather };
