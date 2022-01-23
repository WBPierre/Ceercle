import ApiService from "../api.service";

class OfficeService {
    constructor() {
        this.request = ApiService
    }

    async getOffices(id) {
        return this.request.get('/office/' + id);
    }

    async listOffices() {
        return this.request.get('/office/listOffices');
    }

    async updateOccupancy(resources) {
        return this.request.post('/office/updateOccupancy', resources);
    }

    async getOfficeElements(officeId, day) {
        return this.request.get('/officeElement/' + officeId + '/full/' + day);
    }
}

export default new OfficeService();