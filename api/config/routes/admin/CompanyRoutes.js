const express = require("express");
const router = express.Router();
const CompanyController = require("../../../src/controllers/admin/CompanyController");
const { isCeercle } = require("../../../src/middlewares/AuthMiddleware");

router.get('/', [isCeercle], CompanyController.listAllCompanies);
router.post('/', [isCeercle, CompanyController.validate("createCompany")], CompanyController.createCompany);
router.get('/specific/:id', [isCeercle], CompanyController.getCompany);

module.exports = router;