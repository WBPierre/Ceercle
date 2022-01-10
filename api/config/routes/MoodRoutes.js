const express = require("express");
const router = express.Router();
const MoodController = require("../../src/controllers/MoodController");
const {isUserAuthenticated} = require("../../src/middlewares/AuthMiddleware");

router.get('/:day', [isUserAuthenticated, MoodController.validate('getMood')], MoodController.getMood);
router.post('/',  [isUserAuthenticated, MoodController.validate('setMood')],MoodController.setMood);

module.exports = router;