const Office = require('../../models/Office');
const OfficeElement = require('../../models/OfficeElement');
const { validationResult, param, body } = require("express-validator");
const Team = require("../../models/Team");
const Utils = require("../../services/Utils");
const OfficeBooking = require('../../models/OfficeBooking');
const OfficeElementService = require("../../services/OfficeElementService");


exports.getFloors = async function (req, res, next) {
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
            capacity: result[i].capacity,
            maxCapacity: result[i].maxCapacity
        };
        arr.push(obj);
    }
    res.json(arr);
}

exports.getRooms = async function (req, res, next) {
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
            maxCapacity: result[i].maxCapacity,
            available: await OfficeElementService.verifyRoomOccupancy(result[i].id, req.params.day)
        };
        arr.push(obj);
    }
    res.json(arr);
}

exports.getDesks = async function (req, res, next) {
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
}

exports.isSeatAvailable = async function (req, res, next) {
    let offices_with_elements = {}
    let leafs = []
    const offices = await Office.findAll({
        where: {
            companyId: res.locals.auth.user.companyId
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
}

exports.getOfficeElementsWithCapacity = async function (req, res, next) {
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
}

exports.getOfficeElementsFromCompany = async function (req, res, next) {
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
}

exports.updateOccupancy = async function (req, res, next) {
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
}


exports.validate = (method) => {
    switch (method) {
        case 'getOfficeElements': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'getOfficeElementsFromCompany': {
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
        case 'updateOccupancy': {
            return [
                body('officeElementId', 'officeElementId doesn\'t exist').exists(),
                body('officeElementId', 'officeElementId is not a number').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a number').isNumeric(),
            ]
        }
    }
}