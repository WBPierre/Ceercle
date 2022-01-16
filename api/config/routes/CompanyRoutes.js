const express = require("express");
const router = express.Router();
const CompanyController = require("../../src/controllers/CompanyController");
const {isAdminUser, isCeercle} = require("../../src/middlewares/AuthMiddleware");

router.get('/', [isCeercle], CompanyController.listAllCompanies);
router.get('/:id',  [isAdminUser, CompanyController.validate("getCompany")], CompanyController.getCompany);
router.post('/',  [isCeercle, CompanyController.validate("createCompany")], CompanyController.createCompany);
router.put('/:id',  [isAdminUser, CompanyController.validate("updateCompany")], CompanyController.updateCompany);


module.exports = router;