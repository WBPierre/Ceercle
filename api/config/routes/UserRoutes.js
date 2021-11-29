import UserController from "../../src/controllers/UserController.js";

export default function(server){
    server.get('/users', UserController.listAllUsers);
    server.get('/create', UserController.createUser);
};