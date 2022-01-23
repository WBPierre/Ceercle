const express = require("express");
const router = express.Router();
const CompanyController = require("../../src/controllers/CompanyController");
const { isAdminUser, isCeercle } = require("../../src/middlewares/AuthMiddleware");

router.get('/', [isCeercle], CompanyController.listAllCompanies);
router.get('/specific/:id', [isCeercle], CompanyController.getCompany);
router.get('/getHRRules', [isAdminUser], CompanyController.getHRRules);
router.post('/', [isCeercle, CompanyController.validate("createCompany")], CompanyController.createCompany);
router.post('/updateHRRules', [isAdminUser, CompanyController.validate("updateHRRules")], CompanyController.updateHRRules);
router.put('/:id', [isAdminUser, CompanyController.validate("updateCompany")], CompanyController.updateCompany);


module.exports = router;