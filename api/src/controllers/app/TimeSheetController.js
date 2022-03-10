const { param, body } = require("express-validator");
const TimeSheet = require('../../models/TimeSheet');
const Moment = require('moment');
const Utils = require('../../services/Utils');
const UserRepository = require('../../repositories/UserRepository');
const TimeSheetRepository = require('../../repositories/TimeSheetRepository');
const OfficeBookingRepository = require('../../repositories/OfficeBookingRepository');
const OfficeRepository = require('../../repositories/OfficeRepository');
const OfficeElementRepository = require('../../repositories/OfficeElementRepository');
const TeamRepository = require('../../repositories/TeamRepository');
const ThirdPartyService = require('../../services/ThirdPartyService');

// Moment warning
Moment.suppressDeprecationWarnings = true;


exports.getTeamTimeSheet = async function (req, res, next) {
    const user = await UserRepository.findOneById(res.locals.auth.user.id);
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
            let colleagues = users.filter(x => x.id !== res.locals.auth.user.id && !x.isDeleted);
            for (let j = 0; j < colleagues.length; j++) {
                await TimeSheetRepository.findOneByDayAndUserId(day, colleagues[j].id)
                    .then((record) => {
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
    const week = Utils.getUsersWeekTimeSheets(req.params.index);
    const users = await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId);
    // id: {[Op.ne]:res.locals.auth.user.id}
    for (let i = 0; i < week.length; i++) {
        week[i].totalUsers = users.length;
    }
    for (const user of users) {
        await TimeSheetRepository.findAllByUserIdBetweenDates(user.id, Moment(new Date(week[0].day)), Moment(new Date(week[week.length - 1].day)))
            .then(async (record) => {
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
}


exports.getTimeSheet = async function (req, res, next) {
    const week = Utils.getCurrentWeek(req.params.index);
    await TimeSheetRepository.findAllByUserIdBetweenDates(res.locals.auth.user.id, Moment(new Date(week[0].day)), Moment(new Date(week[week.length - 1].day)))
        .then(async (record) => {
            if (record.length === 0) {
                res.json({ week });
            } else {
                for (let i = 0; i < record.length; i++) {
                    let resa = [];
                    if (record[i].morning === 1 || record[i].afternoon === 1) {
                        const reservation = await OfficeBookingRepository.findOneByDayAndUserId(record[i].day, res.locals.auth.user.id);
                        if (reservation) {
                            let officeElementId = reservation.officeElementId;
                            while (officeElementId !== null) {
                                const element = await OfficeElementRepository.findOneById(officeElementId);
                                if (element) {
                                    officeElementId = element.parentId;
                                    if (resa.length === 0) {
                                        resa.push({ id: element.id, name: element.name, color: element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity, backgroundPath: element.backgroundPath, users: [] });
                                    } else {
                                        resa.unshift({ id: element.id, name: element.name, color: element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity, backgroundPath: element.backgroundPath, users: [] });
                                    }
                                    if (element.parentId === null) {
                                        const parent = await OfficeRepository.findOneById(element.officeId);
                                        if (parent) {
                                            resa.unshift({ id: parent.id, name: parent.name, capacity: parent.capacity, maxCapacity: parent.maxCapacity, users:[] });
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
}

exports.setTimeSheet = async function (req, res, next) {
    req.body.userId = res.locals.auth.user.id
    await TimeSheetRepository.findOneByDayAndUserId(req.body.day, res.locals.auth.user.id)
        .then(async (record) => {
            await ThirdPartyService.setTeamSheetInGoogleCalendar(res.locals.auth.user.id, req.body.day, req.body.morning, req.body.afternoon);
            if (!record) {
                const timesheet = await TimeSheet.create(req.body)
                res.json(timesheet);
            } else {
                record.update({ morning: req.body.morning, afternoon: req.body.afternoon }).then((updated) => {
                    res.json(updated);
                })
            }
        })
}


exports.hasUserValidatedCompanyRules = async function (req, res, next) {
    const user = await UserRepository.findOneById(res.locals.auth.user.id);
    if (!user) {
        res.status(404);
        res.send();
        return;
    }

    const companyRuleScope = user.ruleScope
    const companyOfficeMaximum = user.officeMaximum
    const companyRemoteMaximum = user.remoteMaximum
    const mondayMandatoryStatus = user.mondayMandatoryStatus
    const tuesdayMandatoryStatus = user.tuesdayMandatoryStatus
    const wednesdayMandatoryStatus = user.wednesdayMandatoryStatus
    const thursdayMandatoryStatus = user.thursdayMandatoryStatus
    const fridayMandatoryStatus = user.fridayMandatoryStatus
    companyMandatoryStatuses = [mondayMandatoryStatus, tuesdayMandatoryStatus, wednesdayMandatoryStatus, thursdayMandatoryStatus, fridayMandatoryStatus]
    let userStatusesForWeek = [0, 0, 0, 0, 0]
    let userStatusesForMonth = [0, 0, 0, 0, 0]
    let userStatusesByDayForWeek = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

    const week = Utils.getCurrentWeek(req.params.index);
    await TimeSheetRepository.findAllByUserIdBetweenDates(res.locals.auth.user.id, Moment(new Date(week[0].day)), Moment(new Date(week[week.length - 1].day)), [['day', 'ASC']])
        .then((record) => {
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
    await TimeSheetRepository.findAllByUserIdBetweenDates(res.locals.auth.user.id, month[0], month[1])
        .then((record) => {
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
    }

    res.json({
        check: check,
        companyOfficeMaximum: companyOfficeMaximum, companyRemoteMaximum: companyRemoteMaximum, companyRuleScope: companyRuleScope,
        mondayMandatoryStatus: mondayMandatoryStatus, tuesdayMandatoryStatus: tuesdayMandatoryStatus, wednesdayMandatoryStatus: wednesdayMandatoryStatus,
        thursdayMandatoryStatus: thursdayMandatoryStatus, fridayMandatoryStatus: fridayMandatoryStatus,
        userStatusesByDayForWeek: userStatusesByDayForWeek,
        userOffice: userOffice, userRemote: userRemote
    });
}


exports.getTimeSheetStats = async function (req, res, next) {
    //Filters variables
    let collaboratorSearchId = req.params.collaborator;
    let teamSearchId = req.params.team;
    let startDate = req.params.startDate;
    let endDate = req.params.endDate;

    // Helper variables
    let users_targeted = []
    let { business_days_list, business_days_count, nb_business_days } = Utils.selectBusinessDays(startDate, endDate)

    // Initialize output variables
    let pieData = [0, 0, 0, 0, 0]
    let byWeekdayData = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]] //careful: matrix is (status, weekDay)
    let historicData = [Array.from({ length: business_days_list.length }, (_, i) => 0),
    Array.from({ length: business_days_list.length }, (_, i) => 0),
    Array.from({ length: business_days_list.length }, (_, i) => 0),
    Array.from({ length: business_days_list.length }, (_, i) => 0),
    Array.from({ length: business_days_list.length }, (_, i) => 0)]

    // Load the associated users
    if (collaboratorSearchId > 0) {
        const user_targeted = await UserRepository.findOneById(collaboratorSearchId);
        if (!user_targeted) {
            res.status(403);
            res.send();
        } else {
            users_targeted = [user_targeted]
        }
    } else {
        if (teamSearchId > 0) {
            const team = await TeamRepository.findOneById(teamSearchId);
            users_targeted = await team.getUsers({ where: { active: true, isDeleted: false }, order: [['lastName', 'ASC'], ['firstName', 'ASC']] })
            if (!users_targeted) {
                res.status(403);
                res.send();
            }
        } else {
            users_targeted = await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyid);
            if (!users_targeted) {
                res.status(403);
                res.send();
            }
        }
    }

    // Compute the values
    for (let i = 0; i < users_targeted.length; i++) {
        await TimeSheetRepository.findAllByUserIdBetweenDates(users_targeted[i].id, startDate, endDate, [['day', 'ASC']])
            .then((record) => {
                for (let j = 0; j < business_days_list.length; j++) {
                    let day = business_days_list[j]
                    let morning = 0
                    let afternoon = 0
                    if (record) {
                        let obj = record.find(x => x.day === day)
                        if (obj) {
                            morning = obj.morning
                            afternoon = obj.afternoon
                        }
                    }

                    // Fill Pie Chart
                    pieData[morning] += 0.5
                    pieData[afternoon] += 0.5

                    // Fill weekdays Bar Chart
                    byWeekdayData[morning][Moment(day).day() - 1] += 0.5
                    byWeekdayData[afternoon][Moment(day).day() - 1] += 0.5

                    // Fill historic Area Chart
                    historicData[morning][j] += 0.5
                    historicData[afternoon][j] += 0.5

                }
            })
    }

    res.json({
        pieData: pieData, //Utils.formatRatioList(pieData),
        byWeekdayData: byWeekdayData, //Utils.formatRatioMatrixByColumn(byWeekdayData),
        historicData: Utils.formatRatioStackedMatrixByColumn(historicData),
        business_days_list: business_days_list
    });
}


exports.validate = (method) => {
    switch (method) {
        case 'getTimeSheet': {
            return [
                param('index', 'index doesn\'t exist').exists(),
                param('index', 'index is not a number').isNumeric()
            ]
        }
        case 'getTimeSheetStats': {
            return [
                param('collaborator', 'collaborator doesn\'t exist').exists(),
                param('collaborator', 'collaborator is not a number').isNumeric(),
                param('team', 'team doesn\'t exist').exists(),
                param('team', 'team is not a number').isNumeric(),
                param('startDate', 'startDate doesn\'t exist').exists(),
                param('startDate', 'startDate is not a date').isDate(),
                param('endDate', 'endDate doesn\'t exist').exists(),
                param('endDate', 'endDate is not a date').isDate()
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