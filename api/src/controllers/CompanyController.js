const Company = require("../models/Company");
const { validationResult, param, body } = require("express-validator");

exports.createCompany = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const { name } = req.body;
        const company = await Company.create({
            name
        });
        res.json(company);
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
                    id: res.locals.auth.user.company.id
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
        const company = await Company.findAll({
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
        case 'createCompany': {
            return [
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
            ]
        }
        case 'updateHRRules': {
            return [
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
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('activeOfficeHandler', 'activeOfficeHandler is not a boolean').isBoolean(),
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