import ApiService from "../api.service";

class UserService {
    constructor() {
        this.request = ApiService
    }

    async getAllUsers() {
        return this.request.get(`/users`)
    }

    async createUser() {
        return this.request.get('/create')
    }

}

export default new UserService()