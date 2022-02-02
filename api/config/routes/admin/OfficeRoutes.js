const express = require("express");
const router = express.Router();
const OfficeController = require("../../../src/controllers/app/OfficeController");
const { isCeercle } = require("../../../src/middlewares/AuthMiddleware");

router.get('/:id', [isCeercle, OfficeController.validate('getOffices')], OfficeController.getOffices);
router.post('/', [isCeercle, OfficeController.validate('createOffice')], OfficeController.createOffice);
router.put('/', [isCeercle, OfficeController.validate('updateOffice')], OfficeController.updateOffice);
router.delete('/', [isCeercle, OfficeController.validate('deleteOffice')], OfficeController.deleteOffice);

module.exports = router;
