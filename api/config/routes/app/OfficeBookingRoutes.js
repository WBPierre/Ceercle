const express = require("express");
const router = express.Router();
const OfficeBookingController = require("../../../src/controllers/app/OfficeBookingController");
const {isUserAuthenticated} = require("../../../src/middlewares/AuthMiddleware");
const {verifyErrors} = require("../../../src/middlewares/ErrorMiddleware");

router.get('/:day', [isUserAuthenticated, OfficeBookingController.validate('getOfficeBooking'), verifyErrors], OfficeBookingController.getOfficeBooking);
router.delete('/:day', [isUserAuthenticated, OfficeBookingController.validate('removeOfficeBooking'), verifyErrors], OfficeBookingController.removeOfficeBooking);
router.post('/', [isUserAuthenticated, OfficeBookingController.validate('setOfficeBooking'), verifyErrors], OfficeBookingController.setOfficeBooking);

module.exports = router;