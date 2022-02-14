const express = require("express");
const router = express.Router();
const CompanyController = require("../../../src/controllers/app/CompanyController");
const { isAdminUser } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/getHRRules', [isAdminUser], CompanyController.getHRRules);
router.post('/updateHRRules', [isAdminUser, CompanyController.validate("updateHRRules"), verifyErrors], CompanyController.updateHRRules);

module.exports = router;