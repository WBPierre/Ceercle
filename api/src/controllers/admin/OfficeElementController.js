const OfficeElement = require('../../models/OfficeElement');
const { param, body } = require("express-validator");
const Utils = require("../../services/Utils");
const OfficeElementRepository = require('../../repositories/OfficeElementRepository');


exports.getOfficeElements = async function (req, res, next) {
    const id = req.params.id;
    let result = await OfficeElementRepository.findAllByOfficeId(id, [['id', 'ASC']]);

    let arr = [];
    for (let i = 0; i < result.length; i++) {
        let obj = {
            id: result[i].id,
            name: result[i].name,
            type: result[i].type,
            color: result[i].color,
            capacity: result[i].capacity,
            parentId: result[i].parentId,
            officeId: result[i].officeId,
            elements: []
        };
        arr.push(obj);
    }
    const array = Utils.generateTree(arr);
    res.json(array);
}


exports.createOfficeElement = async function (req, res, next) {
    const result = await OfficeElement.create(req.body)
    res.json(result);
}

exports.updateOfficeElement = async function (req, res, next) {
    await OfficeElementRepository.findOneById(req.body.id)
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

exports.deleteOfficeElement = async function (req, res, next) {
    await OfficeElementRepository.deleteById(req.body.id);
    res.sendStatus(200);
}

exports.validate = (method) => {
    switch (method) {
        case 'getOfficeElements': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'createOfficeElement': {
            return [
                body('parentId', 'parentId doesn\'t exist').exists(),
                body('parentId', 'parentId is not a number').isNumeric().optional({ nullable: true }),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('type', 'type doesn\'t exist').exists(),
                body('type', 'type is not a number').isNumeric(),
                body('color', 'color is not a string').isString(),
                body('capacity', 'capacity is not a string').isNumeric(),
            ]
        }
        case 'updateOfficeElement': {
            return [
                body('id', 'id doesn\'t exist').exists(),
                body('id', 'id is not a number').isNumeric(),
                body('name', 'name is not a string').isString(),
                body('type', 'type is not a number').isNumeric(),
                body('color', 'color is not a string').isString(),
                body('capacity', 'capacity is not a string').isNumeric(),
            ]
        }
        case 'deleteOfficeElement': {
            return [
                body('id', 'id doesn\'t exist').exists(),
                body('id', 'id is not a number').isNumeric(),
            ]
        }
    }
}