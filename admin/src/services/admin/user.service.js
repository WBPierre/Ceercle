import ApiService from "../api.service";

class UserService {
    constructor() {
        this.request = ApiService
    }

    async getAllUsersOfCompany(id){
        return this.request.get('/users/'+id);
    }

    async createInvitation(resources){
        return this.request.post('/users/invitation/create', resources);
    }

}

export default new UserService()