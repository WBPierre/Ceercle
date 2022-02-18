const Office = require('../../models/Office');
const { param, body } = require("express-validator");
const OfficeRepository = require('../../repositories/OfficeRepository');

exports.getOffices = async function (req, res, next) {
    const id = req.params.id;
    const result = await OfficeRepository.findAllForCompany(id);
    res.json(result);
}

exports.createOffice = async function (req, res, next) {
    const result = await Office.create(req.body)
    res.json(result);
}

exports.updateOffice = async function (req, res, next) {
    await OfficeRepository.findOneById(req.body.id)
        .then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                record.update(req.body).then((updated) => {
                    res.json(updated);
                })
            }
        });
}

exports.deleteOffice = async function (req, res, next) {
    await OfficeRepository.deleteById(req.body.id);
    res.sendStatus(200);
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
