import ApiService from "../api.service";

class UserService {
  constructor() {
    this.request = ApiService;
  }

  async verifyInvitation(token) {
    return this.request.get("/users/invitation/verify/" + token);
  }

  async createUserFromInvitation(resources) {
    return this.request.post("/users/invitation/validate", resources);
  }

  async createInvitation(resources) {
    return this.request.post("/users/invitation/create", resources);
  }

  async disableUser(id) {
    return this.request.get("/users/disable/" + id);
  }

  async getUsers() {
    return this.request.get("/users/");
  }

  async getGlossaryUsers() {
    return this.request.get("/users/list/all");
  }

  async resetPassword(resources) {
    return this.request.post("/users/resetPassword", resources);
  }

  async getUserForCompany() {
    return this.request.get("/users/company/all");
  }

  async getUserInfo() {
    return this.request.get("/users/current");
  }

  async getUserInTeam(resources) {
    return this.request.get(
      "/users/userInTeam/" + resources.userId + "/" + resources.teamId
    );
  }

  async getUsersNamesForTeam(teamIndex) {
    return this.request.get("/users/namesForTeam/" + teamIndex);
  }

  async updateUserGeneral(ressource) {
    return this.request.put("/users/general", ressource);
  }

  async updateUserPassword(ressource) {
    return this.request.put("/users/password", ressource);
  }

  async updateUserSettings(ressource) {
    return this.request.put("/users/settings", ressource);
  }

  async uploadProfile(resources) {
    return this.request.post("/users/uploadProfile", resources);
  }

  async uploadBanner(resources) {
    return this.request.post("/users/uploadBanner", resources);
  }
}

export default new UserService();
