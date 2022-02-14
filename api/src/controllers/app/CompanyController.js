const Company = require("../../models/Company");
const { body } = require("express-validator");

exports.getHRRules = async function (req, res, next) {
    await Company.findOne(
        {
            where: {
                id: res.locals.auth.user.companyId
            }
        }).then((record) => {
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
        });
}

exports.updateHRRules = async function (req, res, next) {
    await Company.findOne(
        {
            where: {
                id: res.locals.auth.user.companyId
            }
        }).then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                let to_update = {
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
                record.update(to_update).then((updated) => {
                    res.json(updated);
                })
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