import ApiService from "../api.service";

class UserService {
    constructor() {
        this.request = ApiService
    }

    async getUsers() {
        return this.request.get('/users/');
    }

    async getUserInfo() {
        return this.request.get('/users/current');
    }

    async updateUserGeneral(ressource) {
        return this.request.put('/users/general', ressource);
    }

    async updateUserPassword(ressource) {
        return this.request.put('/users/password', ressource);
    }

}

export default new UserService();