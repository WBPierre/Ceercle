const express = require("express");
const router = express.Router();
const UserController = require('../../src/controllers/UserController');
const ContactController = require("../../src/controllers/ContactController");
const {isUserAuthenticated, isAdminUser} = require("../../src/middlewares/AuthMiddleware");

router.get('/', isAdminUser, UserController.listAllUsers);
router.post('/', [isAdminUser, UserController.validate('createUser')], UserController.createUser);
router.put('/:id', [isUserAuthenticated, UserController.validate('updateUser')], UserController.updateUser);
router.post('/uploadProfile', [isUserAuthenticated], UserController.uploadProfile);
router.post('/uploadBanner', [isUserAuthenticated], UserController.uploadBanner);

module.exports = router;