const express = require("express");
const router = express.Router();
const AuthController = require("../../../src/controllers/admin/AuthController");
const { verifyErrors } = require("../../../src/middlewares/ErrorMiddleware");

router.post('/login', [AuthController.validate("login"), verifyErrors], AuthController.adminLogin);
router.get('/verify',  AuthController.adminVerify);
router.post('/refreshToken', [AuthController.validate('refreshToken'), verifyErrors], AuthController.refreshToken);

module.exports = router;