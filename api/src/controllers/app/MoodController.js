const {validationResult, param, body} = require("express-validator");
const Mood = require("../../models/Mood");
const TimeSheet = require("../../models/TimeSheet");
const MoodRepository = require('../../repositories/MoodRepository');

exports.getMood = async function(req, res, next) {
    const mood = await MoodRepository.findOneByDayAndUserId(req.params.day, res.locals.auth.user.id);
    res.json(mood);
}

exports.setMood = async function(req, res, next) {
    req.body.userId = res.locals.auth.user.id
    await MoodRepository.findOneByDayAndUserId(req.body.day, res.locals.auth.user.id)
        .then(async (record)=> {
            if(!record){
                const mood = await Mood.create(req.body)
                res.json(mood);
            }else{
                record.update({type: req.body.type}).then((updated) => {
                    res.json(updated);
                })
            }
        })
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