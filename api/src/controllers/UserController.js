import User from "../models/User.js";

const UserController = {

    async listAllUsers (req, res) {
        const users = await User.findAll();
        res.json(users)
    },
    async createUser(req, res) {
        const user = await User.create({
            firstName: 'Alice',
            lastName: 'Bob',
        });
        res.json(user.firstName)
    }
}
export default UserController;