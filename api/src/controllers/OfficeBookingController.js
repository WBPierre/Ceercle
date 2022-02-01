const OfficeBooking = require("../models/OfficeBooking");
const {validationResult, param, body} = require("express-validator");
const OfficeElement = require("../models/OfficeElement");
const Office = require("../models/Office");


exports.removeOfficeBooking = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await OfficeBooking.findOne({
            where:{
                day: req.params.day,
                userId: res.locals.auth.user.id
            }
        }).then(async (record)=> {
            if(!record){
                res.status(404);
                res.send();
            }else{
                await record.destroy();
                res.status(200);
                res.send();
            }
        })
    } catch(err) {
        return next(err)
    }
}

exports.setOfficeBooking = async function (req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        req.body.userId = res.locals.auth.user.id
        await OfficeBooking.findOne({
            where:{
                day: req.body.day,
                userId: res.locals.auth.user.id
            }
        }).then(async (record)=> {
            if(!record){
                const officeBooking = await OfficeBooking.create(req.body)
                res.json(officeBooking);
            }else{
                record.update({morning: req.body.morning, afternoon: req.body.afternoon, officeElementId: req.body.officeElementId}).then((updated) => {
                    res.json(updated);
                })
            }
        })
    } catch(err) {
        return next(err)
    }
}

exports.getOfficeBooking = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await OfficeBooking.findOne({
            where:{
                day:req.params.day,
                userId: res.locals.auth.user.id
            }
        }).then(async (record)=> {
            if(!record){
                res.json([]);
            }else{
                let resa = [];
                let officeElementId = record.officeElementId;
                while(officeElementId !== null) {
                    const element = await OfficeElement.findOne({
                        where:{
                            id: officeElementId
                        }
                    });
                    if(element) {
                        officeElementId = element.parentId;
                        if(resa.length === 0) {
                            resa.push({id: element.id, name: element.name, color:element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity});
                        }else {
                            resa.unshift({id: element.id, name: element.name, color:element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity});
                        }
                        if(element.parentId === null){
                            const parent = await Office.findOne({
                                where:{
                                    id: element.officeId
                                }
                            });
                            if(parent){
                                resa.unshift({id: parent.id, name: parent.name, capacity: parent.capacity, maxCapacity: parent.maxCapacity});
                            }
                        }
                    }
                }
                res.json(resa);

            }
        })
    } catch(err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getOfficeBooking': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'removeOfficeBooking': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'setOfficeBooking':{
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('morning', 'morning doesn\'t exist').exists(),
                body('morning', 'morning is not a number').isBoolean(),
                body('afternoon', 'afternoon doesn\'t exist').exists(),
                body('afternoon', 'afternoon is not a number').isBoolean(),
                body('officeElementId', 'officeElementId doesn\'t exist').exists(),
                body('officeElementId', 'officeElementId is not a number').isNumeric()
            ]
        }
    }
}