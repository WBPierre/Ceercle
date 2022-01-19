const express = require("express");
const router = express.Router();
const ContactController = require("../../src/controllers/ContactController");
const {isAdminUser, isCeercle} = require("../../src/middlewares/AuthMiddleware");


router.post('/', ContactController.validate('contactRequest'), ContactController.sendContact);
router.get('/', isAdminUser,  ContactController.listAllContacts);
//router.get('/preview', ContactController.preview);
router.get('/:id', isAdminUser,  ContactController.validate('getContact'), ContactController.getContact);

module.exports = router;