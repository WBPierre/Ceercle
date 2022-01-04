const express = require("express");
const router = express.Router();
const AuthController = require("../../src/controllers/AuthController");

router.get('/verify',  AuthController.verify);
router.post('/login',  AuthController.validate("login"), AuthController.login);
router.post('/admin/login', AuthController.validate("login"), AuthController.adminLogin);
router.get('/admin/verify',  AuthController.verify);


module.exports = router;