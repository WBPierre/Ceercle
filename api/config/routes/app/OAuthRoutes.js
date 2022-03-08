const express = require("express");
const router = express.Router();
const ThirdPartyController = require("../../../src/controllers/app/ThirdPartyController");
const {isAdminUser, isUserAuthenticated} = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.post('/slack',  [isAdminUser, ThirdPartyController.validate('verifySlack'), verifyErrors],ThirdPartyController.verifySlack);
router.get('/google/url', [isUserAuthenticated], ThirdPartyController.getGoogleCalendarAuthUrl);
router.get('/google/verify', [isUserAuthenticated], ThirdPartyController.hasGoogleCalendarConnected);
router.post('/google/connect', [isUserAuthenticated], ThirdPartyController.connectGoogleCalendar);
router.get('/google/remove', [isUserAuthenticated], ThirdPartyController.removeGoogleCalendar);

module.exports = router;