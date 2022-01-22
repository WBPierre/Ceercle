const express = require("express");
const router = express.Router();
const TeamController = require('../../src/controllers/TeamController');
const { isAdminUser, isSpaceCorner, isUserAuthenticated } = require("../../src/middlewares/AuthMiddleware");

router.post('/', [isAdminUser, TeamController.validate('createTeam')], TeamController.createTeam);
router.put('/:id', [isAdminUser, TeamController.validate('updateTeam')], TeamController.updateTeam);
router.get('/:id', [isUserAuthenticated, TeamController.validate('getTeam')], TeamController.getTeam);
router.get('/all', [isUserAuthenticated], TeamController.listAllTeams);
router.delete('/:id', [isAdminUser, TeamController.validate('getTeam')], TeamController.deleteTeam);

module.exports = router;