const { param, body, validationResult } = require("express-validator");
const User = require('../../models/User');
const Company = require('../../models/Company');
const Security = require('../../services/Security');
const jwt = require('jsonwebtoken');
const config = require('../../../config/auth.config');
const RefreshToken = require("../../models/RefreshToken");

exports.adminVerify = function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.sendStatus(400);
    } else {
        jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET, async (err, authData) => {
            if (err) return res.status(401).json(err);
            if (authData.user.companyId === undefined) {
                res.sendStatus(403);
            } else {
                await Company.findOne({
                    where: {
                        id: authData.user.companyId
                    }
                }).then(async (companyRecord) => {
                    if (!companyRecord) {
                        res.status(403);
                        res.send();
                    } else {
                        if (!companyRecord.admin) {
                            res.status(403);
                            res.send();
                        } else {
                            res.status(200).json({
                                firstName: authData.user.firstName,
                                lastName: authData.user.lastName,
                                email: authData.user.email
                            });
                        }
                    }
                })
            }
        });
    }
}

exports.adminLogin = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const { email, password } = req.body
        await User.findOne(
            {
                where: {
                    email: email
                }
            }).then(async (record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                } else {
                    if (record.active) {
                        await Company.findOne({
                            where: {
                                id: record.companyId
                            }
                        }).then(async (companyRecord) => {
                            if (!companyRecord) {
                                res.status(403);
                                res.send();
                            } else {
                                if (!companyRecord.admin) {
                                    res.status(403);
                                    res.send();
                                } else {
                                    if (await Security.verifyPassword(password, record.password)) {
                                        jwt.sign({
                                            user: {
                                                id: record.id,
                                                firstName: record.firstName,
                                                lastName: record.lastName,
                                                email: record.email,
                                                companyId: record.companyId,
                                                active: record.active,
                                                isAdmin: record.isAdmin
                                            }
                                        }, process.env.JWT_SECRET, { expiresIn: config.jwtExpiration }, async (err, token) => {
                                            if (err) res.send(err);
                                            let refreshToken = await RefreshToken.createToken(record.id);
                                            res.json({ token: token, refreshToken: refreshToken });
                                        });
                                    }
                                }
                            }
                        })
                    } else {
                        res.status(403);
                        res.send();
                    }
                }
            });
    } catch (err) {
        return next(err)
    }
}


exports.login = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const { email, password } = req.body
        await User.findOne(
            {
                where: {
                    email: email
                }
            }).then(async (record) => {
                if (!record) {
                    res.status(403);
                    res.send();
                } else {
                    if (record.active && !record.isDeleted) {
                        if (await Security.verifyPassword(password, record.password)) {
                            const company = await record.getCompany();
                            if(!company.active){
                                res.status(403);
                                res.send();
                                return;
                            }
                            jwt.sign({
                                user: {
                                    id: record.id,
                                    firstName: record.firstName,
                                    lastName: record.lastName,
                                    email: record.email,
                                    company: company,
                                    active: record.active,
                                    isAdmin: record.isAdmin,
                                }
                            }, process.env.JWT_SECRET, { expiresIn: config.jwtExpiration }, async (err, token) => {
                                if (err) res.send(err);
                                let refreshToken = await RefreshToken.createToken(record.id);
                                res.json({ token: token, refreshToken: refreshToken });
                            });
                        } else {
                            res.status(403);
                            res.send();
                        }
                    } else {
                        res.status(403);
                        res.send();
                    }
                }
            });
    } catch (err) {
        return next(err)
    }
}

exports.verify = function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.sendStatus(400);
    } else {
        jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET, async (err, authData) => {
            if (err) {
                return res.status(401).json(err);
            }
            const record = await User.findOne(
                {
                    where: {
                        id: authData.user.id
                    }
                });
            if (!record) {
                res.status(403);
                res.send();
            }else{
                if(!record.active || record.isDeleted){
                    res.status(403);
                    res.send();
                    return;
                }
                const company = await record.getCompany();
                if(!company.active){
                    res.status(403);
                    res.send();
                    return;
                }else{
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
                        company: company
                    });
                }
            }

        });
    }
}

exports.refreshToken = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        let refreshToken = await RefreshToken.findOne({ where: { token: req.body.refreshToken } });
        if (!refreshToken) {
            res.sendStatus(403);
            return;
        }
        if (RefreshToken.verifyExpiration(refreshToken)) {
            RefreshToken.destroy({ where: { id: refreshToken.id } });
            res.sendStatus(403);
            return;
        }
        let user = await refreshToken.getUser();
        let newAccessToken = await jwt.sign(
            {
                user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    company: await user.getCompany(),
                    active: user.active,
                    isAdmin: user.isAdmin,
                }
            },
            process.env.JWT_SECRET, { expiresIn: config.jwtExpiration });
        return res.json({ token: newAccessToken, refreshToken: refreshToken.token });
    } catch (err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'login': {
            return [
                body('email', 'email doesn\'t exist').exists(),
                body('email', 'email is not an email').isEmail(),
                body('password', 'password doesn\'t exist').exists(),
                body('password', 'password is not a string').isString()
            ]
        }
        case 'refreshToken': {
            return [
                body('refreshToken', 'refreshToken doesn\'t exist').exists(),
                body('refreshToken', 'refreshToken is not a string').isString()
            ]
        }
    }
}