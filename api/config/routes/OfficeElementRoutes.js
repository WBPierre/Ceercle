const express = require("express");
const router = express.Router();
const OfficeElementController = require("../../src/controllers/OfficeElementController");
const {isUserAuthenticated, isSpaceCorner, isAdminUser} = require("../../src/middlewares/AuthMiddleware");

router.get('/:id', [isUserAuthenticated, OfficeElementController.validate('getOfficeElements')], OfficeElementController.getOfficeElements);
router.get('/:id/full/:day', [isUserAuthenticated, OfficeElementController.validate('getOfficeElements')], OfficeElementController.getOfficeElementsWithCapacity);
router.post('/', [isSpaceCorner, OfficeElementController.validate('createOfficeElement')], OfficeElementController.createOfficeElement);
router.put('/', [isAdminUser, OfficeElementController.validate('updateOfficeElement')], OfficeElementController.updateOfficeElement);
router.delete('/', [isSpaceCorner, OfficeElementController.validate('deleteOfficeElement')], OfficeElementController.deleteOfficeElement);

module.exports = router;