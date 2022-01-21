import ApiService from "../api.service";

class TeamService {
    constructor() {
        this.request = ApiService
    }

    async listAllTeams() {
        return this.request.get('/team/all');
    }
}


export default new TeamService();