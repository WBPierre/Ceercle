const express = require("express");
const router = express.Router();
const CompanyController = require("../../../src/controllers/admin/CompanyController");
const { isCeercle, isAdminUser} = require("../../../src/middlewares/AuthMiddleware");

router.get('/', [isCeercle], CompanyController.listAllCompanies);
router.post('/', [isCeercle, CompanyController.validate("createCompany")], CompanyController.createCompany);
router.get('/specific/:id', [isCeercle], CompanyController.getCompany);
router.put('/:id', [isCeercle, CompanyController.validate("updateCompany")], CompanyController.updateCompany);
router.get('/stats/:companyId', [isCeercle, CompanyController.validate('getStats')], CompanyController.getStats);

module.exports = router;