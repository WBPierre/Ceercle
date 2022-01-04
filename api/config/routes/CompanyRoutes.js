const express = require("express");
const router = express.Router();
const CompanyController = require("../../src/controllers/CompanyController");
const {isAdminUser, isSpaceCorner} = require("../../src/middlewares/AuthMiddleware");

router.get('/', [isSpaceCorner], CompanyController.listAllCompanies);
router.get('/:id',  [isAdminUser, CompanyController.validate("getCompany")], CompanyController.getCompany);
router.post('/',  [isSpaceCorner, CompanyController.validate("createCompany")], CompanyController.createCompany);
router.put('/:id',  [isAdminUser, CompanyController.validate("updateCompany")], CompanyController.updateCompany);


module.exports = router;