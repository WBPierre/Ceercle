const express = require("express");
const router = express.Router();
const ContactController = require("../../src/controllers/ContactController");

router.post('/', ContactController.validate('contactRequest'), ContactController.sendContact);
router.get('/',  ContactController.listAllContacts);
//router.get('/preview', ContactController.preview);
router.get('/:id',  ContactController.validate('getContact'), ContactController.getContact);

module.exports = router;