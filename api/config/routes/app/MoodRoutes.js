const express = require("express");
const router = express.Router();
const MoodController = require("../../../src/controllers/app/MoodController");
const {isUserAuthenticated} = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');

router.get('/:day', [isUserAuthenticated, MoodController.validate('getMood'), verifyErrors], MoodController.getMood);
router.post('/',  [isUserAuthenticated, MoodController.validate('setMood'), verifyErrors],MoodController.setMood);

module.exports = router;