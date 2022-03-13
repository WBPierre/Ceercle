import ApiService from "../api.service";

class OfficeService {
    constructor() {
        this.request = ApiService
    }

    async getOffices() {
        return this.request.get('/office/');
    }

    async getFloors(id) {
        return this.request.get('/officeElement/floors/' + id);
    }

    async getRooms(id, day) {
        return this.request.get('/officeElement/rooms/' + id + '/' + day);
    }

    async getDesks(id, day) {
        return this.request.get('/officeElement/desks/' + id + '/' + day);
    }

    async isSeatAvailable(day, when) {
        return this.request.get('/officeElement/isSeatAvailable/' + day + "/" + when);
    }

    async listOffices() {
        return this.request.get('/office/listOffices');
    }

    async listOfficesElements(companyId) {
        return this.request.get('/officeElement/byCompany/' + companyId);
    }

    async updateOccupancy(resources) {
        return this.request.post('/officeElement/updateOccupancy', resources);
    }

    async getOfficeElements(officeId, day) {
        return this.request.get('/officeElement/' + officeId + '/full/' + day);
    }

    async gestDeskFullName(id){
        return this.request.get('/officeElement/deskFullName/' + id)
    }
}

export default new OfficeService();