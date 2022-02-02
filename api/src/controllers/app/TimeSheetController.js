const { param, body, validationResult } = require("express-validator");
const TimeSheet = require('../../models/TimeSheet');
const Moment = require('moment');
const Utils = require('../../services/Utils');
const { Op } = require('sequelize');
const Security = require("../../services/Security");
const User = require("../../models/User");
const OfficeBooking = require("../../models/OfficeBooking");
const OfficeElement = require("../../models/OfficeElement");
const Office = require('../../models/Office');
const Company = require('../../models/Company')

// Moment warning
Moment.suppressDeprecationWarnings = true;


exports.getTeamTimeSheet = async function (req, res, next) {
    const user = await User.findOne({
        where: {
            id: res.locals.auth.user.id
        }
    });
    if (!user) {
        res.status(403);
        res.send();
    } else {
        let obj = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        }
        let day = req.params.day;
        const teams = await user.getTeams();
        for (let i = 0; i < teams.length; i++) {
            let users = await teams[i].getUsers();
            let colleagues = users.filter(x => x.id !== res.locals.auth.user.id);
            for (let j = 0; j < colleagues.length; j++) {
                await TimeSheet.findOne({
                    where: {
                        day: day,
                        userId: colleagues[j].id
                    }
                }).then((record) => {
                    let found = false;
                    if (!record) {
                        for (let h = 0; h < obj[0].length; h++) {
                            if (obj[0][h].firstName === colleagues[j].firstName && obj[0][h].lastName === colleagues[j].lastName) {
                                found = true;
                            }
                        }
                        if (!found) {
                            obj[0].push({
                                firstName: colleagues[j].firstName,
                                lastName: colleagues[j].lastName,
                                profilePicturePath: colleagues[j].profilePicturePath
                            })
                        }
                    } else {
                        for (let h = 0; h < obj[record.morning].length; h++) {
                            if (obj[record.morning][h].firstName === colleagues[j].firstName && obj[record.morning][h].lastName === colleagues[j].lastName) {
                                found = true;
                            }
                        }
                        if (!found) {
                            obj[record.morning].push({
                                firstName: colleagues[j].firstName,
                                lastName: colleagues[j].lastName,
                                profilePicturePath: colleagues[j].profilePicturePath
                            })
                        }
                    }
                })
            }
        }
        res.json(obj);
    }
}

exports.getUsersTimeSheet = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const week = Utils.getUsersWeekTimeSheets(req.params.index);
        const users = await User.findAll({
            where: {
                companyId: res.locals.auth.user.company.id
            }
        });
        // id: {[Op.ne]:res.locals.auth.user.id}
        for (let i = 0; i < week.length; i++) {
            week[i].totalUsers = users.length;
        }
        for (const user of users) {
            await TimeSheet.findAll({
                where: {
                    day: {
                        [Op.between]: [Moment(new Date(week[0].day)), Moment(new Date(week[week.length - 1].day))]
                    },
                    userId: user.id
                }
            }).then(async (record) => {
                if (record.length === 0) {
                    let obj = {
                        fullName: user.firstName + ' ' + user.lastName,
                        morning: 0,
                        afternoon: 0,
                        profilePicturePath: user.profilePicturePath,
                        teams: await user.getTeams()
                    }
                    for (let i = 0; i < week.length; i++) {
                        week[i].type[0].push(obj);
                    }
                } else {
                    for (let j = 0; j < week.length; j++) {
                        let obj = {
                            fullName: user.firstName + ' ' + user.lastName,
                            morning: 0,
                            afternoon: 0,
                            profilePicturePath: user.profilePicturePath,
                            teams: await user.getTeams()
                        }
                        let found = false;
                        for (let i = 0; i < record.length; i++) {
                            if (week[j].day === record[i].day) {
                                found = true;
                                obj.morning = record[i].morning;
                                obj.afternoon = record[i].afternoon;
                                week[j].type[record[i].morning].push(obj);
                                if (record[i].morning !== record[i].afternoon) {
                                    week[j].type[record[i].afternoon].push(obj);
                                }
                            }
                        }
                        if (!found) {
                            week[j].type[0].push(obj);
                        }
                    }
                }
            })
        }
        res.json(week);
    } catch (err) {
        return next(err)
    }
}


exports.getTimeSheet = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const week = Utils.getCurrentWeek(req.params.index);
        await TimeSheet.findAll({
            where: {
                day: {
                    [Op.between]: [Moment(new Date(week[0].day)), Moment(new Date(week[week.length - 1].day))]
                },
                userId: res.locals.auth.user.id
            }
        }).then(async (record) => {
            if (record.length === 0) {
                res.json({ week });
            } else {
                for (let i = 0; i < record.length; i++) {
                    let resa = [];
                    if (record[i].morning === 1) {
                        const reservation = await OfficeBooking.findOne({
                            where: {
                                day: record[i].day,
                                userId: res.locals.auth.user.id
                            }
                        })
                        if (reservation) {
                            let officeElementId = reservation.officeElementId;
                            while (officeElementId !== null) {
                                const element = await OfficeElement.findOne({
                                    where: {
                                        id: officeElementId
                                    }
                                });
                                if (element) {
                                    officeElementId = element.parentId;
                                    if (resa.length === 0) {
                                        resa.push({ id: element.id, name: element.name, color: element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity });
                                    } else {
                                        resa.unshift({ id: element.id, name: element.name, color: element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity });
                                    }
                                    if (element.parentId === null) {
                                        const parent = await Office.findOne({
                                            where: {
                                                id: element.officeId
                                            }
                                        });
                                        if (parent) {
                                            resa.unshift({ id: parent.id, name: parent.name, capacity: parent.capacity, maxCapacity: parent.maxCapacity });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    week[week.map(e => { return e.day }).indexOf(Moment(record[i].day).format("YYYY-MM-DD"))].morning = record[i].morning;
                    week[week.map(e => { return e.day }).indexOf(Moment(record[i].day).format("YYYY-MM-DD"))].afternoon = record[i].afternoon;
                    week[week.map(e => { return e.day }).indexOf(Moment(record[i].day).format("YYYY-MM-DD"))].reservation = resa;
                }
                res.json({ week })
            }
        })
    } catch (err) {
        return next(err)
    }
}

exports.setTimeSheet = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        req.body.userId = res.locals.auth.user.id
        await TimeSheet.findOne({
            where: {
                day: req.body.day,
                userId: res.locals.auth.user.id
            }
        }).then(async (record) => {
            if (!record) {
                const timesheet = await TimeSheet.create(req.body)
                res.json(timesheet);
            } else {
                record.update({ morning: req.body.morning, afternoon: req.body.afternoon }).then((updated) => {
                    res.json(updated);
                })
            }
        })
    } catch (err) {
        return next(err)
    }
}


exports.getHasUserValidatedCompanyRules = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const company = await Company.findOne({
            where: { id: res.locals.auth.user.company.id }
        })
        if (!company) {
            res.status(404);
            res.send();
            return;
        }

        const companyRuleScope = company.ruleScope
        const companyOfficeMaximum = company.officeMaximum
        const companyRemoteMaximum = company.remoteMaximum
        const mondayMandatoryStatus = company.mondayMandatoryStatus
        const tuesdayMandatoryStatus = company.tuesdayMandatoryStatus
        const wednesdayMandatoryStatus = company.wednesdayMandatoryStatus
        const thursdayMandatoryStatus = company.thursdayMandatoryStatus
        const fridayMandatoryStatus = company.fridayMandatoryStatus
        companyMandatoryStatuses = [mondayMandatoryStatus, tuesdayMandatoryStatus, wednesdayMandatoryStatus, thursdayMandatoryStatus, fridayMandatoryStatus]
        let userStatusesForWeek = [0, 0, 0, 0, 0]
        let userStatusesForMonth = [0, 0, 0, 0, 0]
        let userStatusesByDayForWeek = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

        const week = Utils.getCurrentWeek(req.params.index);
        await TimeSheet.findAll({
            order: [['day', 'ASC']],
            where: {
                day: {
                    [Op.between]: [Moment(new Date(week[0].day)), Moment(new Date(week[week.length - 1].day))]
                },
                userId: res.locals.auth.user.id
            }
        }).then((record) => {
            if (record.length === 0) {
                res.json({
                    check: true, checkFailed: null,
                    companyOfficeMaximum: companyOfficeMaximum, companyRemoteMaximum: companyRemoteMaximum, companyRuleScope: companyRuleScope,
                    userOffice: 0, userRemote: 0
                });
            } else {
                for (let i = 0; i < record.length; i++) {
                    userStatusesForWeek[record[i].morning] += 0.5
                    userStatusesForWeek[record[i].afternoon] += 0.5
                    userStatusesByDayForWeek[i][0] = record[i].morning
                    userStatusesByDayForWeek[i][1] = record[i].afternoon
                }
            }
        })

        const month = Utils.getCurrentMonth(req.params.index);
        await TimeSheet.findAll({
            where: {
                day: {
                    [Op.between]: [month[0], month[1]]
                },
                userId: res.locals.auth.user.id
            }
        }).then((record) => {
            if (record.length === 0) {
                res.json({
                    check: true,
                    companyOfficeMaximum: companyOfficeMaximum, companyRemoteMaximum: companyRemoteMaximum, companyRuleScope: companyRuleScope,
                    userOffice: 0, userRemote: 0
                });
            } else {
                for (let i = 0; i < record.length; i++) {
                    userStatusesForMonth[record[i].morning] += 0.5
                    userStatusesForMonth[record[i].afternoon] += 0.5
                }
            }
        })

        let userOffice = userStatusesForWeek[1]
        let userRemote = userStatusesForWeek[2]
        let check = true;

        if (companyRuleScope === 0 && (userStatusesForWeek[1] > companyOfficeMaximum || userStatusesForWeek[2] > companyRemoteMaximum)) {
            check = false
        }

        if (companyRuleScope === 1 && (userStatusesForMonth[1] > companyOfficeMaximum || userStatusesForMonth[2] > companyRemoteMaximum)) {
            check = false
            userOffice = userStatusesForMonth[1]
            userRemote = userStatusesForMonth[2]
        }

        if (!Utils.checkIfWeekCompliantToHRRules(companyMandatoryStatuses, userStatusesByDayForWeek)) {
            check = false
            console.log(companyMandatoryStatuses)
            console.log(userStatusesByDayForWeek)
        }

        res.json({
            check: check,
            companyOfficeMaximum: companyOfficeMaximum, companyRemoteMaximum: companyRemoteMaximum, companyRuleScope: companyRuleScope,
            mondayMandatoryStatus: mondayMandatoryStatus, tuesdayMandatoryStatus: tuesdayMandatoryStatus, wednesdayMandatoryStatus: wednesdayMandatoryStatus,
            thursdayMandatoryStatus: thursdayMandatoryStatus, fridayMandatoryStatus: fridayMandatoryStatus,
            userStatusesByDayForWeek: userStatusesByDayForWeek,
            userOffice: userOffice, userRemote: userRemote
        });

    } catch (err) {
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
        case 'setTimeSheet': {
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('morning', 'morning doesn\'t exist').exists(),
                body('morning', 'morning is not a number').isNumeric(),
                body('afternoon', 'afternoon doesn\'t exist').exists(),
                body('afternoon', 'afternoon is not a number').isNumeric()
            ]
        }
        case 'getTeamTimeSheet': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
    }
}