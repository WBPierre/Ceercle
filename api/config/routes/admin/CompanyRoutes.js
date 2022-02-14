const express = require("express");
const router = express.Router();
const CompanyController = require("../../../src/controllers/admin/CompanyController");
const { isCeercle} = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/', [isCeercle], CompanyController.listAllCompanies);
router.post('/', [isCeercle, CompanyController.validate("createCompany"), verifyErrors], CompanyController.createCompany);
router.get('/specific/:id', [isCeercle, CompanyController.validate("getCompany"), verifyErrors], CompanyController.getCompany);
router.put('/:id', [isCeercle, CompanyController.validate("updateCompany"), verifyErrors], CompanyController.updateCompany);
router.get('/stats/:companyId', [isCeercle, CompanyController.validate('getStats'), verifyErrors], CompanyController.getStats);

module.exports = router;