const Team = require('../../models/Team');
const { param, body } = require("express-validator");
const TeamRepository = require('../../repositories/TeamRepository');
const RulesService = require("../../services/RulesService");
const CompanyRepository = require('../../repositories/CompanyRepository');

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

exports.updateHasSpecificRules = async function (req, res, next) {
    await TeamRepository.findOneById(req.body.teamId)
    .then(async (record) => {
      if (!record) {
        res.status(404);
        res.send();
      } else {
        await record
          .update({
            hasSpecificRules: req.body.hasSpecificRules
          })
          .then(() => {
            res.status(200);
            res.send();
          });
      }
    });
  };
   
  exports.updateRulesValue = async function (req, res, next) {
    await TeamRepository.findOneById(req.body.teamId)
    .then(async (record) => {
      if (!record) {
        res.status(404);
        res.send();
      } else {
        let rules = {
            ruleScope: req.body.ruleScope,
            officeMaximum: req.body.officeMaximum,
            remoteMaximum: req.body.remoteMaximum,
            mondayMandatoryStatus: req.body.mondayMandatoryStatus,
            tuesdayMandatoryStatus: req.body.tuesdayMandatoryStatus,
            wednesdayMandatoryStatus: req.body.wednesdayMandatoryStatus,
            thursdayMandatoryStatus: req.body.thursdayMandatoryStatus,
            fridayMandatoryStatus: req.body.fridayMandatoryStatus
        }
        
        if (!record.hasSpecificRules){
            const company = await CompanyRepository.findOneById(res.locals.auth.user.companyId)
            rules = {
                ruleScope: company.ruleScope,
                officeMaximum: company.officeMaximum,
                remoteMaximum: company.remoteMaximum,
                mondayMandatoryStatus: company.mondayMandatoryStatus,
                tuesdayMandatoryStatus: company.tuesdayMandatoryStatus,
                wednesdayMandatoryStatus: company.wednesdayMandatoryStatus,
                thursdayMandatoryStatus: company.thursdayMandatoryStatus,
                fridayMandatoryStatus: company.fridayMandatoryStatus
            }
        }
        const update =  await RulesService.updateRulesValue(record, rules)
        if (update){
            let users_linked = await record.getUsers({ where:{active: true, isDeleted: false}})
            for (const user of users_linked) {
                if(!user.hasSpecificRules){
                    await RulesService.updateRulesValue(user, rules)
                }
            }
        }
        res.status(200);
        res.send();
      }
    });
  };

exports.getTeamRules = async function (req, res, next) {
    await TeamRepository.findOneById(req.params.teamId)
    .then(async (record) => {
      if (!record) {
        res.status(404);
        res.send();
      } else {
        res.status(200).json({
          hasSpecificRules: record.hasSpecificRules,
          ruleScope: record.ruleScope,
          officeMaximum: record.officeMaximum,
          remoteMaximum: record.remoteMaximum,
          mondayMandatoryStatus: record.mondayMandatoryStatus,
          tuesdayMandatoryStatus: record.tuesdayMandatoryStatus,
          wednesdayMandatoryStatus: record.wednesdayMandatoryStatus,
          thursdayMandatoryStatus: record.thursdayMandatoryStatus,
          fridayMandatoryStatus: record.fridayMandatoryStatus
        });
      }
    });
};

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
        case "updateHasSpecificRules": {
            return [
                body('teamId', 'teamId doesn\'t exist').exists(),
                body('teamId', 'teamId is not a number').isNumeric(),
                body("hasSpecificRules", "hasSpecificRules does not exist").exists(),
                body("hasSpecificRules", "hasSpecificRules is not an boolean").isBoolean(),
            ];
          }
        case "updateRulesValue": {
            return [
                body('teamId', 'teamId doesn\'t exist').exists(),
                body('teamId', 'teamId is not a number').isNumeric(),body('ruleScope', 'ruleScope is not a number').isNumeric(),
                body('remoteMaximum', 'remoteMaximum is not a number').isNumeric(),
                body('officeMaximum', 'officeMaximum is not a number').isNumeric(),
                body('mondayMandatoryStatus', 'mondayMandatoryStatus is not a number').isNumeric(),
                body('tuesdayMandatoryStatus', 'tuesdayMandatoryStatus is not a number').isNumeric(),
                body('wednesdayMandatoryStatus', 'wednesdayMandatoryStatus is not a number').isNumeric(),
                body('thursdayMandatoryStatus', 'thursdayMandatoryStatus is not a number').isNumeric(),
                body('fridayMandatoryStatus', 'fridayMandatoryStatus is not a number').isNumeric(),
            ];
        }
        case "getTeamRules": {
            return [
              param("teamId", "teamId does not exist").exists(),
              param("teamId", "teamId is not an integer").isNumeric(),
            ];
          }
    }
}
