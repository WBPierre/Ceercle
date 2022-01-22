import ApiService from "../api.service";

class TeamService {
    constructor() {
        this.request = ApiService
    }

    async listAllTeams() {
        return this.request.get('/team/all');
    }

    async createTeam(ressource) {
        return this.request.post('/team/', ressource);
    }

    async addUserToTeam(ressource) {
        return this.request.post('/team/addUserToTeam', ressource);
    }

    async deleteUserFromTeam(ressource) {
        return this.request.post('/team/deleteUserFromTeam', ressource);
    }

    async getTeam(index) {
        return this.request.get('/team/' + index);
    }

    async deleteTeam(index) {
        return this.request.delete('/team/' + index);
    }

    async updateTeamDescription(ressource) {
        return this.request.put('/team/updateTeamDescription', ressource);
    }
}


export default new TeamService();