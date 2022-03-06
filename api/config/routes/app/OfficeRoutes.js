const express = require("express");
const router = express.Router();
const OfficeController = require("../../../src/controllers/app/OfficeController");
const { isAdminUser, isUserAuthenticated } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/listOffices', [isAdminUser], OfficeController.listOffices);
router.get('/', [isUserAuthenticated], OfficeController.getOffices);

module.exports = router;
