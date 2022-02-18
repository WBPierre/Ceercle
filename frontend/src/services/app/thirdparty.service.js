import ApiService from "../api.service";

class ThirdPartyService{
    constructor() {
        this.request = ApiService
    }

    async verifySlack(resources){
        return this.request.post('/thirdparty/slack', resources)
    }
}

export default new ThirdPartyService();