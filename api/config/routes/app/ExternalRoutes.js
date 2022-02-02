const express = require("express");
const router = express.Router();
const ExternalController = require('../../../src/controllers/app/ExternalController');
const {isAdminUser, isCeercle, isUserAuthenticated} = require("../../../src/middlewares/AuthMiddleware");


router.get('/weather', isUserAuthenticated, ExternalController.getWeather);

module.exports = router;