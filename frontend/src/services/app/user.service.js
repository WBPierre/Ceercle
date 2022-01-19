import ApiService from "../api.service";

class UserService {
    constructor() {
        this.request = ApiService
    }

    async getUsers() {
        return this.request.get('/users/');
    }

    async uploadProfile(resources) {
        return this.request.post('/users/uploadProfile', resources);
    }

    async uploadBanner(resources) {
        return this.request.post('/users/uploadBanner', resources);
    }

}

export default new UserService();