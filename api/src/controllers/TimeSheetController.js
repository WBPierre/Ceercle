const {param, body, validationResult} = require("express-validator");
const TimeSheet = require('../models/TimeSheet');
const Moment = require('moment');
const Utils = require('../services/Utils');
const {Op} = require('sequelize');
const Security = require("../services/Security");
const User = require("../models/User");


// Moment warning
Moment.suppressDeprecationWarnings = true;


exports.getTimeSheet = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const week = Utils.getCurrentWeek(req.params.index);
        console.log(week);
        await TimeSheet.findAll({
            where:{
                day:{
                    [Op.between]: [Moment(new Date(week[0].day)), Moment(new Date(week[week.length-1].day))]
                },
                userId: res.locals.auth.user.id
            }
        }).then((record)=> {
            if(record.length === 0){
                res.json({week});
            }else{
                for(let i = 0; i < record.length; i++){
                    week[week.map(e => { return e.day}).indexOf(Moment(record[i].day).format("YYYY-MM-DD"))].morning = record[i].morning;
                    week[week.map(e => { return e.day}).indexOf(Moment(record[i].day).format("YYYY-MM-DD"))].afternoon = record[i].afternoon;
                }
                res.json({week})
            }
        })
    } catch(err) {
        return next(err)
    }
}

exports.setTimeSheet = async function (req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        req.body.userId = res.locals.auth.user.id
        const timesheet = await TimeSheet.create(req.body)
        res.json(timesheet);
    } catch(err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getTimeSheet': {
            return [
                param('index', 'index doesn\'t exist').exists(),
                param('index', 'index is not a number').isNumeric()
            ]
        }
        case 'setTimeSheet':{
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('morning', 'morning doesn\'t exist').exists(),
                body('morning', 'morning is not a number').isNumeric(),
                body('afternoon', 'afternoon doesn\'t exist').exists(),
                body('afternoon', 'afternoon is not a number').isNumeric()
            ]
        }
    }
}