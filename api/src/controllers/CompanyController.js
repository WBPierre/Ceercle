const Company = require("../models/Company");
const {validationResult, param, body} = require("express-validator");

exports.createCompany = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const {name} = req.body;
        const company = await Company.create({
            name
        });
        res.json(company);
    } catch(err) {
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
                where:{
                id:id
            }
        }).then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                record.update(req.body).then((updated) => {
                    res.json(updated);
                })
            }
        });
    } catch(err) {
        return next(err)
    }
}

exports.listAllCompanies = async function (req, res, next) {
    const companies = await Company.findAll({order:[['createdAt', 'DESC']]}, );
    res.json(companies)
}

exports.getCompany = async function(req, res, next) {
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
    } catch(err) {
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
        case 'updateCompany': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                body('name', 'name is not a string').isString(),
            ]
        }
    }
}