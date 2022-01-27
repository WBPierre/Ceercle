import ApiService from "../api.service";

class WeatherService {
    constructor() {
        this.request = ApiService
    }

    async getWeather() {
        return this.request.get('/external/weather');
    }
}

export default new WeatherService();