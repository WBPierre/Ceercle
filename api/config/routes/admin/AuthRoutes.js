const express = require("express");
const router = express.Router();
const AuthController = require("../../../src/controllers/admin/AuthController");

router.post('/login', AuthController.validate("login"), AuthController.adminLogin);
router.get('/verify',  AuthController.adminVerify);
router.post('/refreshToken', AuthController.refreshToken);

module.exports = router;