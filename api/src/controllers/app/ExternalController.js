const axios = require("axios");

exports.getWeather = async function(req, res, next){
    const response = await axios.get('https://api.weatherapi.com/v1/current.json?key='+process.env.WEATHER_KEY+'&q=Paris&aqi=no');
    res.json(response.data);
} 