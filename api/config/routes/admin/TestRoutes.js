const express = require("express");
const router = express.Router();
const TestController = require('../../../src/controllers/admin/TestController');
const { isCeercle} = require("../../../src/middlewares/AuthMiddleware");

router.get('/slack', [isCeercle], TestController.testSlack);

module.exports = router;