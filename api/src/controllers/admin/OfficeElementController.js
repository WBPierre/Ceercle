const Office = require('../../models/Office');
const OfficeElement = require('../../models/OfficeElement');
const { validationResult, param, body } = require("express-validator");
const Utils = require("../../services/Utils");
const OfficeBooking = require('../../models/OfficeBooking');
const OfficeElementService = require("../../services/OfficeElementService");


exports.getOfficeElements = async function (req, res, next) {
    const id = req.params.id;
    let result = await OfficeElement.findAll({
        where: {
            officeId: id
        },
        order: [['id', 'ASC']]
    });

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
    await OfficeElement.findOne(
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
}

exports.deleteOfficeElement = async function (req, res, next) {
    await OfficeElement.destroy(
        {
            where: {
                id: req.body.id
            }
        });
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