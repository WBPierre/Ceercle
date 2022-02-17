const express = require("express");
const router = express.Router();
const ThirdPartyController = require("../../../src/controllers/app/ThirdPartyController");
const {isAdminUser} = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.post('/slack',  [isAdminUser, ThirdPartyController.validate('verifySlack'), verifyErrors],ThirdPartyController.verifySlack);

module.exports = router;