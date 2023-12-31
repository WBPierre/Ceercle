const express = require("express");
const router = express.Router();
const OfficeElementController = require("../../../src/controllers/admin/OfficeElementController");
const { isCeercle } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');


router.get('/:id', [isCeercle, OfficeElementController.validate('getOfficeElements'), verifyErrors], OfficeElementController.getOfficeElements);
router.post('/', [isCeercle, OfficeElementController.validate('createOfficeElement'), verifyErrors], OfficeElementController.createOfficeElement);
router.post('/:id', [isCeercle, OfficeElementController.validate('uploadBackground'), verifyErrors], OfficeElementController.uploadBackground);
router.put('/', [isCeercle, OfficeElementController.validate('updateOfficeElement'), verifyErrors], OfficeElementController.updateOfficeElement);
router.delete('/', [isCeercle, OfficeElementController.validate('deleteOfficeElement'), verifyErrors], OfficeElementController.deleteOfficeElement);
router.delete('/desk/:parentId', [isCeercle, OfficeElementController.validate('deleteOldDesks'), verifyErrors], OfficeElementController.deleteOldDesks);

module.exports = router;