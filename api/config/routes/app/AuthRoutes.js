const express = require("express");
const router = express.Router();
const AuthController = require("../../../src/controllers/app/AuthController");

router.get('/verify',  AuthController.verify);
router.post('/login',  AuthController.validate("login"), AuthController.login);
router.post('/refreshToken', AuthController.refreshToken);

module.exports = router;