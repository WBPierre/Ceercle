import ApiService from "../api.service";

class OfficeElementService{
    constructor() {
        this.request = ApiService
    }

    async getOfficeElements(id){
        return this.request.get('/officeElement/'+id);
    }

    async addOfficeElement(resources){
        return this.request.post('/officeElement/', resources);
    }

    async updateOfficeElement(resources){
        return this.request.put('/officeElement/', resources);
    }

    async deleteOfficeElement(resources){
        return this.request.delete('/officeElement/', {data: resources});
    }
}

export default new OfficeElementService();