import ApiService from "../api.service";

class UserService {
    constructor() {
        this.request = ApiService
    }

    async getUsers() {
        return this.request.get('/users/');
    }

}

export default new UserService();