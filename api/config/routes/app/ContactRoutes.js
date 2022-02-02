const express = require("express");
const router = express.Router();
const ContactController = require("../../../src/controllers/app/ContactController");
const {isAdminUser, isCeercle} = require("../../../src/middlewares/AuthMiddleware");


router.post('/', ContactController.validate('contactRequest'), ContactController.sendContact);
router.get('/', isAdminUser,  ContactController.listAllContacts);
//router.get('/preview', ContactController.preview); // preview for mailer
router.get('/:id', isAdminUser,  ContactController.validate('getContact'), ContactController.getContact);

module.exports = router;