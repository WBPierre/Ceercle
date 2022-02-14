const express = require("express");
const router = express.Router();
const OfficeElementController = require("../../../src/controllers/app/OfficeElementController");
const { isUserAuthenticated, isCeercle, isAdminUser } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/floors/:id', [isUserAuthenticated, OfficeElementController.validate('getFloors'), verifyErrors], OfficeElementController.getFloors)
router.get('/rooms/:id/:day', [isUserAuthenticated, OfficeElementController.validate('getRooms'), verifyErrors], OfficeElementController.getRooms)
router.get('/desks/:id/:day', [isUserAuthenticated, OfficeElementController.validate('getDesks'), verifyErrors], OfficeElementController.getDesks)
router.get('/isSeatAvailable/:day/:when', [isUserAuthenticated, OfficeElementController.validate('isSeatAvailable'), verifyErrors], OfficeElementController.isSeatAvailable);
router.get('/:id/full/:day', [isUserAuthenticated, OfficeElementController.validate('getOfficeElements'), verifyErrors], OfficeElementController.getOfficeElementsWithCapacity);
router.post('/updateOccupancy', [isAdminUser, OfficeElementController.validate('updateOccupancy'), verifyErrors], OfficeElementController.updateOccupancy);
router.get('/byCompany/:id', [isUserAuthenticated, OfficeElementController.validate('getOfficeElementsFromCompany'), verifyErrors], OfficeElementController.getOfficeElementsFromCompany);

module.exports = router;