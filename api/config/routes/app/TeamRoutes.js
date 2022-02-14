const express = require("express");
const router = express.Router();
const TeamController = require('../../../src/controllers/app/TeamController');
const { isAdminUser, isUserAuthenticated } = require("../../../src/middlewares/AuthMiddleware");
const { verifyErrors } = require('../../../src/middlewares/ErrorMiddleware');


router.get('/all', [isUserAuthenticated], TeamController.listAllTeams);
router.get('/:id', [isUserAuthenticated, TeamController.validate('getTeam'), verifyErrors], TeamController.getTeam);
router.post('/', [isAdminUser, TeamController.validate('createTeam'), verifyErrors], TeamController.createTeam);
router.post('/addUserToTeam', [isAdminUser, TeamController.validate('addUserToTeam'), verifyErrors], TeamController.addUserToTeam);
router.put('/updateTeamDescription', [isAdminUser, TeamController.validate('updateTeamDescription'), verifyErrors], TeamController.updateTeamDescription);
router.post('/deleteUserFromTeam', [isAdminUser, TeamController.validate('deleteUserFromTeam'), verifyErrors], TeamController.deleteUserFromTeam);
router.delete('/:id', [isAdminUser, TeamController.validate('deleteTeam'), verifyErrors], TeamController.deleteTeam);

module.exports = router;