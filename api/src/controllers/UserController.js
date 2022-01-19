const User = require("../models/User");
const Security = require('../services/Security');
const { body, param, validationResult } = require('express-validator')
const jwt = require("jsonwebtoken");
const uploadProfile = require('../middlewares/UploadProfileMiddleware');
const uploadBanner = require('../middlewares/UploadBannerMiddleware');


exports.listAllUsers = async function (req, res) {
    const users = await User.findAll({ order: [['createdAt', 'DESC']] });
    res.json(users);
}

exports.getUserInfo = async function (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await User.findOne(
            {
                where: {
                    id: res.locals.auth.user.id
                }
            }).then(async (record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    res.status(200).json({
                        firstName: record.firstName,
                        lastName: record.lastName,
                        email: record.email,
                        phoneNumber: record.phoneNumber,
                        isAdmin: record.isAdmin,
                        defaultWorkingMorningHour: record.defaultWorkingMorningHour,
                        defaultWorkingMorningMinutes: record.defaultWorkingAfternoonMinutes,
                        defaultWorkingAfternoonHour: record.defaultWorkingAfternoonHour,
                        defaultWorkingAfternoonMinutes: record.defaultWorkingAfternoonMinutes,
                        timezone: record.timezone,
                        lang: record.lang,
                        mondayStatus: record.mondayStatus,
                        tuesdayStatus: record.tuesdayStatus,
                        wednesdayStatus: record.wednesdayStatus,
                        thursdayStatus: record.thursdayStatus,
                        fridayStatus: record.fridayStatus,
                        position: record.position,
                        profilePicturePath: record.profilePicturePath,
                        bannerPath: record.bannerPath,
                        teams: await record.getTeams()
                    });
                }
            })
    } catch (err) {
        return next(err)
    }
}

exports.uploadProfile = async function (req, res, next){
    try {
        await uploadProfile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        const url = req.protocol + '://' + process.env.STORAGE_HOST+':'+process.env.STORAGE_PORT + "/public/assets/profile/"+req.file.filename
        await User.findOne(
            {
                where:{
                    id: res.locals.auth.user.id
                }
            }).then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                await record.update({profilePicturePath: url});
            }
        })
        res.status(200).send({path:url});
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
}

exports.uploadBanner = async function (req, res, next){
    try {
        await uploadBanner(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        const url = req.protocol + '://' + process.env.STORAGE_HOST+':'+process.env.STORAGE_PORT + "/public/assets/banner/"+req.file.filename
        await User.findOne(
            {
                where:{
                    id: res.locals.auth.user.id
                }
            }).then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                await record.update({bannerPath: url})
            }
        })
        res.status(200).send({path:url});
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
}

exports.updatePassword = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await User.findOne(
            {
                where: {
                    id: res.locals.auth.user.id
                }
            }).then(async (record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    if (await Security.verifyPassword(req.body.oldPassword, record.password)) {
                        let password = await Security.hashPassword(req.body.newPassword);
                        record.update({ password: password }).then((updated) => {
                            res.json(updated);
                        })
                    } else {
                        res.status(400)
                        res.send()
                    }
                }
            })
    } catch (err) {
        return next(err)
    }
}

exports.createUser = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        req.body.password = await Security.hashPassword(req.body.password)
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        return next(err)
    }
}

exports.updateUser = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await User.findOne(
            {
                where: {
                    id: res.locals.auth.user.id
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

exports.updateUserGeneral = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await User.findOne(
            {
                where: {
                    id: res.locals.auth.user.id
                }
            }).then((record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    record.update({ position: req.body.position, phoneNumber: req.body.phoneNumber }).then((updated) => {
                        res.json(updated);
                    })
                }
            });
    } catch (err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getUser': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'createUser': {
            return [
                body('firstName', 'firstName doesn\'t exist').exists(),
                body('firstName', 'firstName is not a string').isString(),
                body('lastName', 'lastName doesn\'t exist').exists(),
                body('lastName', 'lastName is not a string').isString(),
                body('email', 'email doesn\'t exist').exists(),
                body('email', 'email is not an email').isEmail(),
                body('password', 'password doesn\'t exist').exists(),
                body('password', 'password is not a string').isString(),
                body('phoneNumber', 'phoneNumber doesn\'t exist').exists(),
                body('phoneNumber', 'phoneNumber is not a string').isString(),
                body('companyId', 'companyId doesn\'t exist').exists(),
                body('companyId', 'companyId is not a number').isNumeric(),
            ]
        }
        case 'updateUser': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                body('firstName', 'firstName is not a string').isString(),
                body('lastName', 'lastName is not a string').isString(),
                body('email', 'email is not an email').isEmail(),
                body('password', 'password is not a string').isString(),
                body('phoneNumber', 'phoneNumber is not a string').isString(),
                body('companyId', 'companyId is not a number').isNumeric(),
            ]
        }
        case 'updateUserGeneral': {
            return [
                body('phoneNumber', 'phoneNumber doesn\'t exist').exists(),
                body('phoneNumber', 'phoneNumber is not a string').isString(),
                body('position', 'position doesn\'t exist').exists(),
                body('position', 'position is not a number').isString(),
            ]
        }
        case 'updatePassword': {
            return [
                body('oldPassword', 'oldPassword is not a string').exists(),
                body('oldPassword', 'oldPassword is not a string').isString(),
                body('newPassword', 'newPassword is not a string').exists(),
                body('newPassword', 'newPassword is not a string').isString(),
            ]
        }
        case 'downloadImage':{
            return [
                param('filename', 'filename is not a string').exists(),
                param('filename', 'filename is not a string').isString()
            ]
        }
    }
}

