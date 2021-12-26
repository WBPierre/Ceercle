import ApiService from "../api.service";

class TimeService {
    constructor() {
        this.request = ApiService
    }

    async getTimeSheet(index) {
        return this.request.get('/time/'+index);
    }

    async setTimeSheet(resources) {
        return this.request.post('/time', resources);
    }
}

export default new TimeService();