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

    async getAllTimeSheet(index) {
        return this.request.get('/time/all/'+index);
    }

    async getTeamTimeSheet(day) {
        return this.request.get('/time/team/'+day);
    }
}

export default new TimeService();