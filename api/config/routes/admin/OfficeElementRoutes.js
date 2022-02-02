const express = require("express");
const router = express.Router();
const OfficeElementController = require("../../../src/controllers/app/OfficeElementController");
const { isUserAuthenticated, isCeercle, isAdminUser } = require("../../../src/middlewares/AuthMiddleware");

router.get('/:id', [isCeercle, OfficeElementController.validate('getOfficeElements')], OfficeElementController.getOfficeElements);
router.post('/', [isCeercle, OfficeElementController.validate('createOfficeElement')], OfficeElementController.createOfficeElement);
router.put('/', [isCeercle, OfficeElementController.validate('updateOfficeElement')], OfficeElementController.updateOfficeElement);
router.delete('/', [isCeercle, OfficeElementController.validate('deleteOfficeElement')], OfficeElementController.deleteOfficeElement);

module.exports = router;