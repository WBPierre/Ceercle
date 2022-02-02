const express = require("express");
const router = express.Router();
const UserController = require('../../../src/controllers/admin/UserController');
const { isCeercle} = require("../../../src/middlewares/AuthMiddleware");

router.get('/:companyId', isCeercle, UserController.listUsersOfCompany);
router.post('/invitation/create', isCeercle, UserController.createInvitation);
module.exports = router;