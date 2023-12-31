import ApiService from "../api.service";

class CompanyService{
    constructor() {
        this.request = ApiService
    }

    async getAll() {
        return this.request.get('/company/');
    }

    async getStats(id){
        return this.request.get('/company/stats/'+id);
    }

    async createCompany(resources) {
        return this.request.post('/company/', resources);
    }

    async getCompany(id){
        return this.request.get('/company/specific/'+id);
    }

    async updateCompany(id, resources) {
        return this.request.put('/company/'+id, resources);
    }
}

export default new CompanyService();