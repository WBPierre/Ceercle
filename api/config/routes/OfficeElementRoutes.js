const express = require("express");
const router = express.Router();
const OfficeElementController = require("../../src/controllers/OfficeElementController");
const { isUserAuthenticated, isCeercle, isAdminUser } = require("../../src/middlewares/AuthMiddleware");

router.get('/floors/:id', [isUserAuthenticated, OfficeElementController.validate('getFloors')], OfficeElementController.getFloors)
router.get('/rooms/:id', [isUserAuthenticated, OfficeElementController.validate('getRooms')], OfficeElementController.getRooms)
router.get('/desks/:id', [isUserAuthenticated, OfficeElementController.validate('getDesks')], OfficeElementController.getDesks)
router.get('/:id', [isUserAuthenticated, OfficeElementController.validate('getOfficeElements')], OfficeElementController.getOfficeElements);
router.get('/:id/full/:day', [isUserAuthenticated, OfficeElementController.validate('getOfficeElements')], OfficeElementController.getOfficeElementsWithCapacity);
router.post('/updateOccupancy', [isAdminUser, OfficeElementController.validate('updateOccupancy')], OfficeElementController.updateOccupancy);
router.get('/byCompany/:id', [isUserAuthenticated], OfficeElementController.getOfficeElementsFromCompany);
router.post('/', [isCeercle, OfficeElementController.validate('createOfficeElement')], OfficeElementController.createOfficeElement);
router.put('/', [isAdminUser, OfficeElementController.validate('updateOfficeElement')], OfficeElementController.updateOfficeElement);
router.delete('/', [isCeercle, OfficeElementController.validate('deleteOfficeElement')], OfficeElementController.deleteOfficeElement);

module.exports = router;