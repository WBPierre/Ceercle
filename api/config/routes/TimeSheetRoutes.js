const express = require("express");
const router = express.Router();
const TimeSheetController = require("../../src/controllers/TimeSheetController");
const {isUserAuthenticated} = require("../../src/middlewares/AuthMiddleware");

router.get('/:index', [isUserAuthenticated, TimeSheetController.validate('getTimeSheet')],  TimeSheetController.getTimeSheet);
router.post('/', [isUserAuthenticated, TimeSheetController.validate('setTimeSheet')],  TimeSheetController.setTimeSheet);

module.exports = router;