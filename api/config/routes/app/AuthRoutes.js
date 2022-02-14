const express = require("express");
const router = express.Router();
const AuthController = require("../../../src/controllers/app/AuthController");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/verify',  AuthController.verify);
router.post('/login',  [AuthController.validate("login"), verifyErrors], AuthController.login);
router.post('/refreshToken', [AuthController.validate('refreshToken'), verifyErrors], AuthController.refreshToken);

module.exports = router;