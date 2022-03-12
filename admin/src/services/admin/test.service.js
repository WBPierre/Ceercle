import ApiService from "../api.service";

class TestService{
    constructor() {
        this.request = ApiService
    }

    async testSlack() {
        return this.request.get('/test/slack');
    }
}

export default new TestService();