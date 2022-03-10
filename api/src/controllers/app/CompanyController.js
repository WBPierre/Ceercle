const Company = require("../../models/Company");
const { body } = require("express-validator");
const CompanyRepository = require('../../repositories/CompanyRepository');
const RulesService = require("../../services/RulesService");
const TeamRepository = require('../../repositories/TeamRepository');

exports.getHRRules = async function (req, res, next) {
    await CompanyRepository.findOneById(res.locals.auth.user.companyId).then((record) => {
        if (!record) {
            res.status(404);
            res.send();
        } else {
            res.status(200).json({
                activeOfficeHandler: record.activeOfficeHandler,
                ruleScope: record.ruleScope,
                officeBookingMandatory: record.officeBookingMandatory,
                remoteMaximum: record.remoteMaximum,
                officeMaximum: record.officeMaximum,
                mondayMandatoryStatus: record.mondayMandatoryStatus,
                tuesdayMandatoryStatus: record.tuesdayMandatoryStatus,
                wednesdayMandatoryStatus: record.wednesdayMandatoryStatus,
                thursdayMandatoryStatus: record.thursdayMandatoryStatus,
                fridayMandatoryStatus: record.fridayMandatoryStatus
            })
        }
    })
}

exports.updateHRRules = async function (req, res, next) {
    await CompanyRepository.findOneById(res.locals.auth.user.companyId).then(async (record) => {
        if (!record) {
            res.status(404);
            res.send();
        } else {
            let rules = {
                ruleScope: req.body.ruleScope,
                remoteMaximum: req.body.remoteMaximum,
                officeMaximum: req.body.officeMaximum,
                officeBookingMandatory: req.body.officeBookingMandatory,
                mondayMandatoryStatus: req.body.mondayMandatoryStatus,
                tuesdayMandatoryStatus: req.body.tuesdayMandatoryStatus,
                wednesdayMandatoryStatus: req.body.wednesdayMandatoryStatus,
                thursdayMandatoryStatus: req.body.thursdayMandatoryStatus,
                fridayMandatoryStatus: req.body.fridayMandatoryStatus
            }
            const update = await RulesService.updateCompanyRulesValue(record, rules)
            if(update){
                const teams =  await TeamRepository.findAllForCompany(res.locals.auth.user.companyId)
                for (const team of teams){
                    if(!team.hasSpecificRules){
                        await RulesService.updateRulesValue(team, rules)
                    }
                }
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
}

exports.validate = (method) => {
    switch (method) {
        case 'updateHRRules': {
            return [
                body('ruleScope', 'ruleScope is not a number').isNumeric(),
                body('remoteMaximum', 'remoteMaximum is not a number').isNumeric(),
                body('officeMaximum', 'officeMaximum is not a number').isNumeric(),
                body('officeBookingMandatory', 'officeBookingMandatory is not a boolean').isBoolean(), //add ruleScope!!! + add remoteMaximum & remoteMaximum
                body('mondayMandatoryStatus', 'mondayMandatoryStatus is not a number').isNumeric(),
                body('tuesdayMandatoryStatus', 'tuesdayMandatoryStatus is not a number').isNumeric(),
                body('wednesdayMandatoryStatus', 'wednesdayMandatoryStatus is not a number').isNumeric(),
                body('thursdayMandatoryStatus', 'thursdayMandatoryStatus is not a number').isNumeric(),
                body('fridayMandatoryStatus', 'fridayMandatoryStatus is not a number').isNumeric(),
            ]
        }
    }
}