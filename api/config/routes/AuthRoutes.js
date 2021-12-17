const express = require("express");
const router = express.Router();
const AuthController = require("../../src/controllers/AuthController");

router.post('/login',  AuthController.validate("login"), AuthController.login);


module.exports = router;