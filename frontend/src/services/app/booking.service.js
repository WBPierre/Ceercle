import ApiService from "../api.service";

class BookingService{
    constructor() {
        this.request = ApiService
    }

    async getBooking(day) {
        return this.request.get('/officeBooking/'+day);
    }

    async setBooking(resources){
        return this.request.post('/officeBooking', resources);
    }
}

export default new BookingService();