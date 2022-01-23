const Office = require('../models/Office');
const { validationResult, param, body } = require("express-validator");
const Team = require("../models/Team");


exports.getOffices = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const id = req.params.id;
        const result = await Office.findAll({
            where: {
                companyId: id
            }
        })
        res.json(result);
    } catch (err) {
        return next(err)
    }
}

exports.listOffices = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const result = await Office.findAll({
            where: {
                companyId: res.locals.auth.user.company.id
            }
        })
        res.json(result);
    } catch (err) {
        return next(err)
    }
}

exports.updateOccupancy = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await Office.findOne(
            {
                where: {
                    id: req.body.officeId
                }
            }).then((record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    record.update({ maxCapacity: req.body.maxCapacity }).then((updated) => {
                        res.json(updated);
                    })
                }
            });
    } catch (err) {
        return next(err)
    }
}

exports.createOffice = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const result = await Office.create(req.body)
        res.json(result);
    } catch (err) {
        return next(err)
    }
}

exports.updateOffice = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await Office.findOne(
            {
                where: {
                    id: req.body.id
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

exports.deleteOffice = async function (req, res, next) {
    try {
        console.log(req.body);
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await Office.destroy(
            {
                where: {
                    id: req.body.id
                }
            });
        res.sendStatus(200);
    } catch (err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getOffices': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'createOffice': {
            return [
                body('companyId', 'companyId doesn\'t exist').exists(),
                body('companyId', 'companyId is not a number').isNumeric(),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('capacity', 'capacity doesn\'t exist').exists(),
                body('capacity', 'capacity is not a number').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a number').isNumeric(),
                body('address', 'address is not a string').isString(),
                body('zipCode', 'zipCode is not a string').isString(),
                body('city', 'city is not a string').isString(),
                body('country', 'country is not a string').isString(),
            ]
        }
        case 'updateOccupancy': {
            return [
                body('officeId', 'officeId doesn\'t exist').exists(),
                body('officeId', 'officeId is not a number').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a number').isNumeric(),
            ]
        }
        case 'updateOffice': {
            return [
                body('id', 'id doesn\'t exist').exists(),
                body('id', 'id is not a number').isNumeric(),
                body('name', 'name is not a string').isString(),
                body('capacity', 'capacity is not a number').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a number').isNumeric(),
                body('address', 'address is not a string').isString(),
                body('zipCode', 'zipCode is not a string').isString(),
                body('city', 'city is not a string').isString(),
                body('country', 'country is not a string').isString(),
            ]
        }
        case 'deleteOffice': {
            return [
                body('id', 'id doesn\'t exist').exists(),
                body('id', 'id is not a number').isNumeric(),
            ]
        }
    }
}