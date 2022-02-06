const express = require("express");
const router = express.Router();
const TimeSheetController = require("../../../src/controllers/app/TimeSheetController");
const { isUserAuthenticated, isAdminUser } = require("../../../src/middlewares/AuthMiddleware");

router.get('/stats/:collaborator/:team/:startDate/:endDate', [isAdminUser, TimeSheetController.validate('getTimeSheetStats')], TimeSheetController.getTimeSheetStats);
router.get('/team/:day', [isUserAuthenticated, TimeSheetController.validate('getTeamTimeSheet')], TimeSheetController.getTeamTimeSheet);
router.get('/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet')], TimeSheetController.getTimeSheet);
router.get('/hasUserValidatedCompanyRules/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet')], TimeSheetController.getHasUserValidatedCompanyRules);
router.get('/all/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet')], TimeSheetController.getUsersTimeSheet);
router.post('/', [isUserAuthenticated, TimeSheetController.validate('setTimeSheet')], TimeSheetController.setTimeSheet);

module.exports = router;