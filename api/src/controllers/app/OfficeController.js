const Office = require('../../models/Office');
const { validationResult, param, body } = require("express-validator");


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
                companyId: res.locals.auth.user.companyId
            },
            order: [['name', 'ASC']]
        })
        res.json(result);
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
    }
}