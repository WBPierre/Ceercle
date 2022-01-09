const {param, body, validationResult} = require("express-validator");
const TimeSheet = require('../models/TimeSheet');
const Moment = require('moment');
const Utils = require('../services/Utils');
const {Op} = require('sequelize');
const Security = require("../services/Security");
const User = require("../models/User");


// Moment warning
Moment.suppressDeprecationWarnings = true;

exports.getUsersTimeSheet = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const week = Utils.getUsersWeekTimeSheets(req.params.index);
        const users = await User.findAll({
            where:{
                companyId: res.locals.auth.user.company.id,
            }
        } );
        //                id: {[Op.ne]:res.locals.auth.user.id}
        for(let i = 0; i < week.length; i++){
            week[i].totalUsers = users.length;
        }
        for(const user of users){
            await TimeSheet.findAll({
                where:{
                    day:{
                        [Op.between]: [Moment(new Date(week[0].day)), Moment(new Date(week[week.length-1].day))]
                    },
                    userId: user.id
                }
            }).then((record)=> {
                if(record.length === 0){
                    let obj = {
                        fullName: user.firstName +' '+ user.lastName,
                        morning: 0,
                        afternoon: 0
                    }
                    for(let i = 0; i < week.length; i++){
                        week[i].type[0].push(obj);
                    }
                }else{
                    for(let j = 0; j < week.length; j++){
                        let obj = {
                            fullName: user.firstName +' '+ user.lastName,
                            morning: 0,
                            afternoon: 0
                        }
                        let found = false;
                        for(let i = 0; i < record.length; i++){
                            if(week[j].day === record[i].day){
                                found = true;
                                obj.morning = record[i].morning;
                                obj.afternoon = record[i].afternoon;
                                week[j].type[record[i].morning].push(obj);
                                if(record[i].morning !== record[i].afternoon){
                                    week[j].type[record[i].afternoon].push(obj);
                                }
                            }
                        }
                        if(!found){
                            week[j].type[0].push(obj);
                        }
                    }
                }
            })
        }
        res.json(week);
    } catch(err) {
        return next(err)
    }
}


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
        await TimeSheet.findOne({
            where:{
                day: req.body.day,
                userId: res.locals.auth.user.id
            }
        }).then(async (record)=> {
            if(!record){
                const timesheet = await TimeSheet.create(req.body)
                res.json(timesheet);
            }else{
                record.update({morning: req.body.morning, afternoon: req.body.afternoon}).then((updated) => {
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