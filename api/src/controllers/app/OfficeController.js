const Office = require('../../models/Office');
const { validationResult, param, body } = require("express-validator");


exports.getOffices = async function (req, res, next) {
    const id = req.params.id;
    const result = await Office.findAll({
        where: {
            companyId: id
        }
    })
    res.json(result);
}

exports.listOffices = async function (req, res, next) {
    const result = await Office.findAll({
        where: {
            companyId: res.locals.auth.user.companyId
        },
        order: [['name', 'ASC']]
    })
    res.json(result);
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