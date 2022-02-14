const express = require("express");
const router = express.Router();
const OfficeController = require("../../../src/controllers/admin/OfficeController");
const { isCeercle } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require("../../../src/middlewares/ErrorMiddleware");

router.get('/:id', [isCeercle, OfficeController.validate('getOffices'), verifyErrors], OfficeController.getOffices);
router.post('/', [isCeercle, OfficeController.validate('createOffice'), verifyErrors], OfficeController.createOffice);
router.put('/', [isCeercle, OfficeController.validate('updateOffice'), verifyErrors], OfficeController.updateOffice);
router.delete('/', [isCeercle, OfficeController.validate('deleteOffice'), verifyErrors], OfficeController.deleteOffice);

module.exports = router;
