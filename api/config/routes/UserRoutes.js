const express = require("express");
const router = express.Router();
const UserController = require('../../src/controllers/UserController');
const ContactController = require("../../src/controllers/ContactController");
const { isUserAuthenticated, isAdminUser } = require("../../src/middlewares/AuthMiddleware");

router.get('/', isAdminUser, UserController.listAllUsers);
router.get('/current', isUserAuthenticated, UserController.getUserInfo);
router.post('/', [isAdminUser, UserController.validate('createUser')], UserController.createUser);
router.put('/general', [isUserAuthenticated, UserController.validate('updateUserGeneral')], UserController.updateUser);
router.put('/password', [isUserAuthenticated, UserController.validate('updatePassword')], UserController.updatePassword);
router.put('/:id', [isUserAuthenticated, UserController.validate('updateUser')], UserController.updateUser);

module.exports = router;