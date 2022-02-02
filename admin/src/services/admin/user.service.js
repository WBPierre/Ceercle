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

    async disableUser(id){
        return this.request.get('/users/disable/'+id);
    }

}

export default new UserService()