const express = require("express");
const router = express.Router();
const TeamController = require('../../src/controllers/TeamController');
const { isAdminUser, isSpaceCorner, isUserAuthenticated } = require("../../src/middlewares/AuthMiddleware");

router.get('/all', [isUserAuthenticated], TeamController.listAllTeams);
router.get('/:id', [isUserAuthenticated, TeamController.validate('getTeam')], TeamController.getTeam);
router.post('/', [isAdminUser, TeamController.validate('createTeam')], TeamController.createTeam);
router.post('/addUserToTeam', [isAdminUser, TeamController.validate('addUserToTeam')], TeamController.addUserToTeam);
router.put('/updateTeamDescription', [isAdminUser, TeamController.validate('updateTeamDescription')], TeamController.updateTeamDescription);
router.post('/deleteUserFromTeam', [isAdminUser, TeamController.validate('deleteUserFromTeam')], TeamController.deleteUserFromTeam);
router.delete('/:id', [isAdminUser, TeamController.validate('deleteTeam')], TeamController.deleteTeam);

module.exports = router;