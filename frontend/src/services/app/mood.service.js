import ApiService from "../api.service";

class MoodService{
    constructor() {
        this.request = ApiService
    }

    async getMood(day) {
        return this.request.get('/mood/'+day);
    }

    async setMood(resources){
        return this.request.post('/mood', resources);
    }
}

export default new MoodService();