import ApiService from "../api.service";

class BookingService{
    constructor() {
        this.request = ApiService
    }

    async getBookingsForOffice(day){
        return this.request.get('/officeBooking/office/'+day);
    }

    async getBookingsForOfficeElement(id, parentId, day){
        return this.request.get('/officeBooking/office/'+id+'/element/'+parentId+'/'+day);
    }

    async getBooking(day) {
        return this.request.get('/officeBooking/'+day);
    }

    async setBooking(resources){
        return this.request.post('/officeBooking', resources);
    }

    async setAutomaticBooking(resources){
        return this.request.post('/officeBooking/setAutomaticBooking', resources);
    }

    async removeBooking(day){
        return this.request.delete('/officeBooking/'+day);
    }
}

export default new BookingService();