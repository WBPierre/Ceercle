const {validationResult, param, body} = require("express-validator");
const Mood = require("../models/Mood");
const TimeSheet = require("../models/TimeSheet");

exports.getMood = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const mood = await Mood.findOne({
            where: {
                day: req.params.day,
                userId: res.locals.auth.user.id
            }
        });
        res.json(mood);
    } catch(err) {
        return next(err)
    }
}

exports.setMood = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        req.body.userId = res.locals.auth.user.id
        await Mood.findOne({
            where:{
                day: req.body.day,
                userId: res.locals.auth.user.id
            }
        }).then(async (record)=> {
            if(!record){
                const mood = await Mood.create(req.body)
                res.json(mood);
            }else{
                record.update({type: req.body.type}).then((updated) => {
                    res.json(updated);
                })
            }
        })
    } catch(err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getMood': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'setMood':{
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('type', 'morning doesn\'t exist').exists(),
                body('type', 'morning is not a number').isNumeric()
            ]
        }
    }
}