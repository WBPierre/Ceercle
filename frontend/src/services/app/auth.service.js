import ApiService from "../api.service";

class AuthService{
    constructor() {
        this.request = ApiService
    }

    async login(resources) {
        return this.request.post('/auth/login', resources);
    }

    async verify(){
        return this.request.get('/auth/verify');
    }

    async refreshToken(){
        return this.request.post('/auth/refreshToken');
    }

}

export default new AuthService();