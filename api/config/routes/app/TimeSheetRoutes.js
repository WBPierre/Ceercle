const express = require("express");
const router = express.Router();
const TimeSheetController = require("../../../src/controllers/app/TimeSheetController");
const { isUserAuthenticated, isAdminUser } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/stats/:collaborator/:team/:startDate/:endDate', [isAdminUser, TimeSheetController.validate('getTimeSheetStats'), verifyErrors], TimeSheetController.getTimeSheetStats);
router.get('/team/:day', [isUserAuthenticated, TimeSheetController.validate('getTeamTimeSheet'), verifyErrors], TimeSheetController.getTeamTimeSheet);
router.get('/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet'), verifyErrors], TimeSheetController.getTimeSheet);
router.get('/hasUserValidatedCompanyRules/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet'), verifyErrors], TimeSheetController.hasUserValidatedCompanyRules);
router.get('/all/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet'), verifyErrors], TimeSheetController.getUsersTimeSheet);
router.post('/', [isUserAuthenticated, TimeSheetController.validate('setTimeSheet'), verifyErrors], TimeSheetController.setTimeSheet);

module.exports = router;