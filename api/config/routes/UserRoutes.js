import UserController from "../../src/controllers/UserController.js";

export default function(server){
    server.get('/api/users', UserController.listAllUsers);
    server.get('/api/create', UserController.createUser);
};