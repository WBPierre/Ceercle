const express = require("express");
const router = express.Router();
const OfficeController = require("../../src/controllers/OfficeController");
const {isAdminUser, isSpaceCorner, isUserAuthenticated} = require("../../src/middlewares/AuthMiddleware");

router.get('/:id', [isUserAuthenticated, OfficeController.validate('getOffices')], OfficeController.getOffices);
router.post('/', [isSpaceCorner, OfficeController.validate('createOffice')], OfficeController.createOffice);
router.put('/', [isAdminUser, OfficeController.validate('updateOffice')], OfficeController.updateOffice);
router.delete('/', [isSpaceCorner, OfficeController.validate('deleteOffice')], OfficeController.deleteOffice);

module.exports = router;
