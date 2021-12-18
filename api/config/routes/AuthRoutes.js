const express = require("express");
const router = express.Router();
const AuthController = require("../../src/controllers/AuthController");

router.get('/verify',  AuthController.verify);
router.post('/login',  AuthController.validate("login"), AuthController.login);

module.exports = router;