import ApiService from "../api.service";

class CompanyService {
    constructor() {
        this.request = ApiService
    }

    async getHRRules() {
        return this.request.get('/company/getHRRules');
    }

    async updateHRRules(ressource) {
        return this.request.post('/company/updateHRRules', ressource);
    }

}


export default new CompanyService();