import ApiService from "../api.service";

class OfficeService{
    constructor() {
        this.request = ApiService
    }

    async getOffices(id){
        return this.request.get('/office/'+id);
    }

    async addOffice(resources){
        return this.request.post('/office/', resources);
    }

    async updateOffice(resources){
        return this.request.put('/office/', resources);
    }

    async deleteOffice(resources){
        return this.request.delete('/office/', {data: resources});
    }
}

export default new OfficeService();