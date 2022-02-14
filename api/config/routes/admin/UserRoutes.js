const express = require("express");
const router = express.Router();
const UserController = require('../../../src/controllers/admin/UserController');
const { isCeercle} = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/disable/:id', [isCeercle, UserController.validate("disableUser"), verifyErrors], UserController.disableUser);
router.get('/:companyId', [isCeercle, UserController.validate("listUsersOfCompany"), verifyErrors], UserController.listUsersOfCompany);
router.post('/invitation/create', [isCeercle, UserController.validate("createInvitation"), verifyErrors], UserController.createInvitation);

module.exports = router;