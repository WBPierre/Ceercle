const express = require("express");
const router = express.Router();
const UserController = require('../../src/controllers/UserController');
const ContactController = require("../../src/controllers/ContactController");
const { isUserAuthenticated, isAdminUser } = require("../../src/middlewares/AuthMiddleware");

router.get('/', isAdminUser, UserController.listAllUsers);
router.get('/namesForTeam/:teamIndex', isAdminUser, UserController.listAllUsersNamesForTeam);
router.get('/list/all', isUserAuthenticated, UserController.listGlossaryUsers);
router.get('/current', isUserAuthenticated, UserController.getUserInfo);
router.post('/', [isAdminUser, UserController.validate('createUser')], UserController.createUser);
router.put('/general', [isUserAuthenticated, UserController.validate('updateUserGeneral')], UserController.updateUserGeneral);
router.put('/password', [isUserAuthenticated, UserController.validate('updatePassword')], UserController.updatePassword);
router.put('/settings', [isUserAuthenticated, UserController.validate('updateUserSettings')], UserController.updateUserSettings);
router.post('/uploadProfile', [isUserAuthenticated], UserController.uploadProfile);
router.post('/uploadBanner', [isUserAuthenticated], UserController.uploadBanner);
router.get('/invitation/verify/:token', UserController.validate('verifyInvitation'), UserController.verifyInvitation);

module.exports = router;