import ApiService from "../api.service";

class WeatherService {
    constructor() {
        this.request = ApiService
    }

    async getWeather(city) {
        return this.request.get('http://api.weatherapi.com/v1/current.json?key=eee17c534a4f41f9803172218220801&q=Paris&aqi=no');
    }
}

export default new WeatherService();