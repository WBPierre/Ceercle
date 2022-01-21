const Team = require('../models/Team');
const { validationResult, param, body } = require("express-validator");
const Company = require("../models/Company");

exports.createTeam = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const team = await Team.create(req.body);
        res.json(team);
    } catch (err) {
        return next(err)
    }
}

exports.updateTeam = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const id = req.params.id;
        await Team.findOne(
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

exports.getTeam = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const id = req.params.id;
        const team = await Team.findOne({
            where: {
                id: id,
            }
        });
        res.json(team);
    } catch (err) {
        return next(err)
    }
}

exports.listAllTeams = async function (req, res, next) {
    console.log("wesh")
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return ("hello");
        }
        await Team.findAll(
            // {
            //     where: {
            //         companyId: res.locals.auth.user.companyId
            //     }
            // }
        ).then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                res.json(record);
            }
        });
    } catch (err) {
        return next(err)
    }
}

exports.deleteTeam = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const id = req.params.id;
        await Team.destroy(
            {
                where: {
                    id: id
                }
            });
        res.sendStatus(200);
    } catch (err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getTeam': {
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
