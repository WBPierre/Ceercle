const Team = require('../../models/Team');
const { param, body } = require("express-validator");
const TeamRepository = require('../../repositories/TeamRepository');

exports.createTeam = async function (req, res, next) {
    let to_create = {
        name: req.body.name,
        color: req.body.color,
        companyId: res.locals.auth.user.companyId
    }
    await Team.create(to_create).then((resultat) => res.json(resultat))
}

exports.updateTeamDescription = async function (req, res, next) {
    await TeamRepository.findOneById(req.body.teamId)
        .then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                to_update = {
                    name: req.body.name,
                    color: req.body.color
                }
                record.update(to_update).then((updated) => {
                    res.json(updated);
                })
            }
        });
}


exports.getTeam = async function (req, res, next) {
    const id = req.params.id;
    const team = await TeamRepository.findOneById(id);
    if(!team){
        res.status(404);
        res.send();
    }
    let users_linked = await team.getUsers({ where:{active: true, isDeleted: false},order: [['lastName', 'ASC'], ['firstName', 'ASC']] })
    let users_formatted = []
    for (let i = 0; i < users_linked.length; i++) {
        let user = {
            'id': users_linked[i].id,
            'name': users_linked[i].firstName + " " + users_linked[i].lastName,
            'position': users_linked[i].position,
            'avatar': users_linked[i].profilePicturePath
        }
        users_formatted.push(user);
    }
    const team_formatted = {
        id: team.id,
        name: team.name,
        color: team.color,
        users: users_formatted
    }
    res.json(team_formatted);
}

exports.listAllTeams = async function (req, res, next) {
    await TeamRepository.findAllForCompany(res.locals.auth.user.companyId)
        .then(async (record) => {
            let teams = [];
            for (let i = 0; i < record.length; i++) {
                let object = {
                    'id': record[i].id,
                    'name': record[i].name,
                    'color': record[i].color,
                    'size': (await record[i].getUsers()).length
                }
                teams.push(object);
            }
            res.json(teams);
        });
}

exports.deleteTeam = async function (req, res, next) {
    const id = req.params.id;
    await TeamRepository.deleteTeamById(id);
    res.sendStatus(200);
}

exports.addUserToTeam = async function (req, res, next) {
    const teamId = req.body.teamId;
    const userId = req.body.userId;
    await TeamRepository.findOneById(teamId)
        .then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                await record.addUser(userId)
                res.sendStatus(200);
            }
        })
}
exports.deleteUserFromTeam = async function (req, res, next) {
    const teamId = req.body.teamId;
    const userId = req.body.userId;
    await TeamRepository.findOneById(teamId)
        .then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                await record.removeUser(userId)
                res.sendStatus(200);
            }
        })
}


exports.validate = (method) => {
    switch (method) {
        case 'getTeam': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'deleteTeam': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'createTeam': {
            return [
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('color', 'color doesn\'t exist').exists(),
                body('color', 'color is not a string').isString(),
            ]
        }
        case 'addUserToTeam': {
            return [
                body('userId', 'userId doesn\'t exist').exists(),
                body('userId', 'userId is not a number').isNumeric(),
                body('teamId', 'teamId doesn\'t exist').exists(),
                body('teamId', 'teamId is not a number').isNumeric(),
            ]
        }
        case 'deleteUserFromTeam': {
            return [
                body('userId', 'userId doesn\'t exist').exists(),
                body('userId', 'userId is not a number').isNumeric(),
                body('teamId', 'teamId doesn\'t exist').exists(),
                body('teamId', 'teamId is not a number').isNumeric(),
            ]
        }
        case 'updateTeamDescription': {
            return [
                body('teamId', 'teamId doesn\'t exist').exists(),
                body('teamId', 'teamId is not a number').isNumeric(),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('color', 'color doesn\'t exist ').exists(),
                body('color', 'color is not a string').isString(),
            ]
        }
        case 'updateTeam': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('color', 'color is not a boolean').isString(),
                body('remoteMinimum', 'remoteMinimum is not a number').isNumeric(),
                body('remoteMaximum', 'remoteMaximum is not a number').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a number').isNumeric(),
                body('mondayMandatoryStatus', 'mondayMandatoryStatus is not a number').isNumeric(),
                body('tuesdayMandatoryStatus', 'tuesdayMandatoryStatus is not a number').isNumeric(),
                body('wednesdayMandatoryStatus', 'wednesdayMandatoryStatus is not a number').isNumeric(),
                body('thursdayMandatoryStatus', 'thursdayMandatoryStatus is not a number').isNumeric(),
                body('fridayMandatoryStatus', 'fridayMandatoryStatus is not a number').isNumeric(),
            ]
        }
    }
}
