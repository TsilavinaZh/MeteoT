const { MeteoT } = require('./MeteoT');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'city',
    message: 'Nom d\'une ville pour obtenir la météo :',
  },
];

const displayWeather = async (city) => {
  try {
    const weatherData = await MeteoT(city);
    console.log(`Conditions actuelles à ${city}:`);
    console.log(`Température: ${weatherData.main.temp}°C`);
    console.log(`Conditions: ${weatherData.weather[0].description}`);
    console.log(`Humidité: ${weatherData.main.humidity}%`);
  } catch (error) {
    console.error('Erreur :', error.message);
  }
};

const run = async () => {
  const answers = await inquirer.prompt(questions);
  await displayWeather(answers.city);
};

run();
