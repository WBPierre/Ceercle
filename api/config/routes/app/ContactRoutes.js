const express = require("express");
const router = express.Router();
const ContactController = require("../../../src/controllers/app/ContactController");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');


router.post('/', [ContactController.validate('contactRequest'), verifyErrors], ContactController.sendContact);
//router.get('/preview', ContactController.preview); // preview for mailer

module.exports = router;