import ApiService from "../api.service";

class AuthService{
    constructor() {
        this.request = ApiService
    }

    async login(resources) {
        return this.request.post('/auth/admin/login', resources);
    }

    async verify(){
        return this.request.get('/auth/admin/verify');
    }
}

export default new AuthService();