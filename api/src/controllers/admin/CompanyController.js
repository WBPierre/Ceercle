const Company = require("../../models/Company");
const { validationResult, param, body } = require("express-validator");
const moment = require("moment");

exports.createCompany = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const { name, activationDay, invoiceType } = req.body;
        const company = await Company.create({
            name: name,
            activation_day: activationDay,
            invoice_type: invoiceType
        });
        res.json(company);
    } catch (err) {
        return next(err)
    }
}

exports.getStats = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const company = await Company.findOne({
            where:{
                id: req.params.companyId
            }
        });
        if(!company){
            res.status(404);
            res.send();
        }else{
            let activeUsers = await company.countUsers({where:{active: true, isDeleted: false}});
            let response = {
                activeUsers: activeUsers,
                pendingUsers: await company.countUsers({where:{active: false, isDeleted: false}}),
                disabledUsers: await company.countUsers({where:{active: true, isDeleted: true}}),
                invoice_type: company.invoice_type,
                teams: await company.countTeams(),
                currentInvoiceValue: activeUsers * (company.invoice_type === 0 ? 3.5 : 3) // PRICE MONTHLY = 3.5 HT PRICE YEARLY 3 HT
            }
            res.json(response);
        }

    } catch (err) {
        return next(err)
    }
}
exports.updateCompany = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const id = req.params.id;
        await Company.findOne(
            {
                where: {
                    id: id
                }
            }).then((record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    record.update(req.body).then((updated) => {
                        res.json(updated);
                    })
                }
            });
    } catch (err) {
        return next(err)
    }
}

exports.getHRRules = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await Company.findOne(
            {
                where: {
                    id: res.locals.auth.user.company.id
                }
            }).then((record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    res.status(200).json({
                        ruleScope: record.ruleScope,
                        officeMinimum: record.officeMinimum,
                        officeMaximum: record.officeMaximum,
                        mondayMandatoryStatus: record.mondayMandatoryStatus,
                        tuesdayMandatoryStatus: record.tuesdayMandatoryStatus,
                        wednesdayMandatoryStatus: record.wednesdayMandatoryStatus,
                        thursdayMandatoryStatus: record.thursdayMandatoryStatus,
                        fridayMandatoryStatus: record.fridayMandatoryStatus
                    })
                }
            });
    } catch (err) {
        return next(err)
    }
}

exports.updateHRRules = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await Company.findOne(
            {
                where: {
                    id: res.locals.auth.user.company.id
                }
            }).then((record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    let to_update = {
                        ruleScope: req.body.ruleScope,
                        officeMinimum: req.body.officeMinimum,
                        officeMaximum: req.body.officeMaximum,
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
    } catch (err) {
        return next(err)
    }
}

exports.listAllCompanies = async function (req, res, next) {
    const companies = await Company.findAll({ order: [['createdAt', 'DESC']] },);
    res.json(companies)
}

exports.getCompany = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const id = req.params.id;
        const company = await Company.findOne({
            where: {
                id: id,
            }
        });
        res.json(company);
    } catch (err) {
        return next(err)
    }
}
exports.validate = (method) => {
    switch (method) {
        case 'getCompany': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'getStats': {
            return [
                param('companyId', 'companyId doesn\'t exist').exists(),
                param('companyId', 'companyId is not a number').isNumeric()
            ]
        }
        case 'createCompany': {
            return [
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('activationDay', 'activationDay doesn\'t exist').exists(),
                body('activationDay', 'activationDay is not a string').isString(),
                body('invoiceType', 'invoiceType doesn\'t exist').exists(),
                body('invoiceType', 'invoiceType is not a string').isNumeric(),
            ]
        }
        case 'updateHRRules': {
            return [
                body('ruleScope', 'ruleScope is not a number').isNumeric(),
                body('officeMinimum', 'officeMinimum is not a number').isNumeric(),
                body('officeMaximum', 'officeMaximum is not a number').isNumeric(),
                body('mondayMandatoryStatus', 'mondayMandatoryStatus is not a number').isNumeric(),
                body('tuesdayMandatoryStatus', 'tuesdayMandatoryStatus is not a number').isNumeric(),
                body('wednesdayMandatoryStatus', 'wednesdayMandatoryStatus is not a number').isNumeric(),
                body('thursdayMandatoryStatus', 'thursdayMandatoryStatus is not a number').isNumeric(),
                body('fridayMandatoryStatus', 'fridayMandatoryStatus is not a number').isNumeric(),

            ]
        }
        case 'updateCompany': {
            return [
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('officeMinimum', 'officeMinimum is not a number').isNumeric(),
                body('officeMaximum', 'officeMaximum is not a number').isNumeric(),
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