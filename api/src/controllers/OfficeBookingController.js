const OfficeBooking = require("../models/OfficeBooking");
const {validationResult, param, body} = require("express-validator");

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
        }).then((record)=> {
            if(!record){
                res.json([]);
            }else{
                res.json("found");
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
        case 'setOfficeBooking':{
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('morning', 'morning doesn\'t exist').exists(),
                body('morning', 'morning is not a number').isNumeric(),
                body('afternoon', 'afternoon doesn\'t exist').exists(),
                body('afternoon', 'afternoon is not a number').isNumeric(),
                body('officeElementId', 'officeElementId doesn\'t exist').exists(),
                body('officeElementId', 'officeElementId is not a number').isNumeric()
            ]
        }
    }
}