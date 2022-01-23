const express = require("express");
const router = express.Router();
const OfficeController = require("../../src/controllers/OfficeController");
const { isAdminUser, isCeercle, isUserAuthenticated } = require("../../src/middlewares/AuthMiddleware");

router.get('/listOffices', [isAdminUser], OfficeController.listOffices);
router.get('/:id', [isUserAuthenticated, OfficeController.validate('getOffices')], OfficeController.getOffices);
router.post('/', [isCeercle, OfficeController.validate('createOffice')], OfficeController.createOffice);
router.post('/updateOccupancy', [isAdminUser, OfficeController.validate('updateOccupancy')], OfficeController.updateOccupancy);
router.put('/', [isAdminUser, OfficeController.validate('updateOffice')], OfficeController.updateOffice);
router.delete('/', [isCeercle, OfficeController.validate('deleteOffice')], OfficeController.deleteOffice);

module.exports = router;
