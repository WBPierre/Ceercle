const express = require("express");
const router = express.Router();
const OfficeBookingController = require("../../src/controllers/OfficeBookingController");
const {isUserAuthenticated, isSpaceCorner, isAdminUser} = require("../../src/middlewares/AuthMiddleware");

router.get('/:day', [isUserAuthenticated, OfficeBookingController.validate('getOfficeBooking')], OfficeBookingController.getOfficeBooking);
router.post('/', [isUserAuthenticated, OfficeBookingController.validate('setOfficeBooking')], OfficeBookingController.setOfficeBooking);

module.exports = router;