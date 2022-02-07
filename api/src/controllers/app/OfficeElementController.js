const Office = require('../../models/Office');
const OfficeElement = require('../../models/OfficeElement');
const { validationResult, param, body } = require("express-validator");
const Team = require("../../models/Team");
const Utils = require("../../services/Utils");
const OfficeBooking = require('../../models/OfficeBooking');
const OfficeElementService = require("../../services/OfficeElementService");


exports.getFloors = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const id = req.params.id;
        let result = await OfficeElement.findAll({
            where: {
                officeId: id,
                parentId: null
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
                capacity: result[i].capacity
            };
            arr.push(obj);
        }
        res.json(arr);
    } catch (err) {
        return next(err)
    }
}

exports.getRooms = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const id = req.params.id;
        let result = await OfficeElement.findAll({
            where: {
                parentId: id
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
                available: await OfficeElementService.verifyRoomOccupancy(result[i].id, req.params.day)
            };
            arr.push(obj);
        }
        res.json(arr);
    } catch (err) {
        return next(err)
    }
}

exports.getDesks = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const id = req.params.id;
        let result = await OfficeElement.findAll({
            where: {
                parentId: id
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
                available: await OfficeElementService.verifyRoomOccupancy(result[i].id, req.params.day)
            };
            arr.push(obj);
        }
        res.json(arr);
    } catch (err) {
        return next(err)
    }
}

exports.isSeatAvailable = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        let offices_with_elements = {}
        let leafs = []
        const offices = await Office.findAll({
            where: {
                companyId: res.locals.auth.user.company.id
            }
        })
        if (offices.length > 0) {
            for (let j = 0; j < offices.length; j++) {
                let result = await OfficeElement.findAll({
                    where: {
                        officeId: offices[j].id
                    },
                    order: [['id', 'ASC']]
                });
                if (result.length > 0) {
                    let arr = [];
                    for (let i = 0; i < result.length; i++) {
                        let obj = {
                            id: result[i].id,
                            name: result[i].name,
                            type: result[i].type,
                            color: result[i].color,
                            capacity: result[i].capacity,
                            maxCapacity: result[i].maxCapacity,
                            parentId: result[i].parentId,
                            officeId: result[i].officeId,
                            elements: []
                        };
                        arr.push(obj);
                    }
                    const array = Utils.generateTree(arr);
                    for (let i = 0; i < array.length; i++) {
                        const leafs_office = Utils.extractLeafFromTree(array[i])
                        leafs = leafs.concat(leafs_office)
                    }
                    offices_with_elements[offices[j].id] = array
                }
            }
        }
        let available = false
        for (let i = 0; i < leafs.length; i++) {
            let availableRoom = await OfficeElementService.verifyRoomOccupancy(leafs[i].id, req.params.day)
            available = available || availableRoom["available"]
        }
        res.json({ available: available });
    } catch (err) {
        return next(err)
    }
}


exports.getOfficeElements = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
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
    } catch (err) {
        return next(err)
    }
}

exports.getOfficeElementsWithCapacity = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
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
                used: await OfficeBooking.count({ where: { day: req.params.day, officeElementId: result[i].id } }),
                parentId: result[i].parentId,
                officeId: result[i].officeId,
                elements: []
            };
            arr.push(obj);
        }

        const array = Utils.generateTree(arr);
        for (let i = 0; i < array.length; i++) {
            Utils.calculateTreeSum(array[i])
        }
        res.json(array);
    } catch (err) {
        return next(err)
    }
}

exports.getOfficeElementsFromCompany = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        let offices_with_elements = {}
        let leafs = []
        const id = req.params.id;
        const offices = await Office.findAll({
            where: {
                companyId: id
            }
        })
        if (offices.length > 0) {
            for (let j = 0; j < offices.length; j++) {
                let parents
                let result = await OfficeElement.findAll({
                    where: {
                        officeId: offices[j].id
                    },
                    order: [['id', 'ASC']]
                });
                if (result.length > 0) {
                    let arr = [];
                    for (let i = 0; i < result.length; i++) {
                        let obj = {
                            id: result[i].id,
                            name: result[i].name,
                            type: result[i].type,
                            color: result[i].color,
                            capacity: result[i].capacity,
                            maxCapacity: result[i].maxCapacity,
                            parentId: result[i].parentId,
                            officeId: result[i].officeId,
                            elements: []
                        };
                        arr.push(obj);
                    }
                    const array = Utils.generateTree(arr);
                    for (let i = 0; i < array.length; i++) {
                        const leafs_office = Utils.extractLeafFromTree(array[i])
                        leafs = leafs.concat(leafs_office)
                    }
                    offices_with_elements[offices[j].id] = array
                }
            }
        }
        res.json(leafs);
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
        await OfficeElement.findOne(
            {
                where: {
                    id: req.body.officeElementId
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

exports.createOfficeElement = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const result = await OfficeElement.create(req.body)
        res.json(result);
    } catch (err) {
        return next(err)
    }
}

exports.updateOfficeElement = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
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
    } catch (err) {
        return next(err)
    }
}

exports.deleteOfficeElement = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await OfficeElement.destroy(
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
        case 'getOfficeElements': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'getFloors': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'getRooms': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a string').isString()
            ]
        }
        case 'getDesks': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a string').isString()
            ]
        }
        case 'isSeatAvailable': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a string').isString()
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
        case 'updateOccupancy': {
            return [
                body('officeElementId', 'officeElementId doesn\'t exist').exists(),
                body('officeElementId', 'officeElementId is not a number').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a number').isNumeric(),
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