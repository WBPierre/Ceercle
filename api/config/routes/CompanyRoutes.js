const express = require("express");
const router = express.Router();
const CompanyController = require("../../src/controllers/CompanyController");
const {isAdminUser} = require("../../src/middlewares/AuthMiddleware");

router.get('/', CompanyController.listAllCompanies);
router.get('/:id',  [isAdminUser, CompanyController.validate("getCompany")], CompanyController.getCompany);
router.post('/',  [isAdminUser, CompanyController.validate("createCompany")], CompanyController.createCompany);
router.put('/:id',  [isAdminUser, CompanyController.validate("updateCompany")], CompanyController.updateCompany);


module.exports = router;