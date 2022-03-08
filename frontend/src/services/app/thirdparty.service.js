import ApiService from "../api.service";

class ThirdPartyService{
    constructor() {
        this.request = ApiService
    }

    async verifySlack(resources){
        return this.request.post('/thirdparty/slack', resources)
    }

    async getGoogleUrl(){
        return this.request.get('/thirdparty/google/url');
    }

    async connectToGoogle(resources) {
        return this.request.post('/thirdparty/google/connect', resources);
    }

    async verifyGoogleCalendarConnection(){
        return this.request.get('/thirdparty/google/verify');
    }

    async removeGoogleCalendar() {
        return this.request.get('/thirdparty/google/remove');
    }
}

export default new ThirdPartyService();