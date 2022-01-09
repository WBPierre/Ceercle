const {param, body, validationResult} = require("express-validator");
const User = require('../models/User');
const Company = require('../models/Company');
const Security = require('../services/Security');
const jwt = require('jsonwebtoken');
const config = require('../../config/secrets');

exports.adminVerify = function (req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.sendStatus(400);
    } else {
        jwt.verify(authHeader.split(' ')[1], config.secrets.jwt_key, async (err, authData) => {
            if(err) return res.status(403).json(err);
            if(authData.user.companyId === undefined){
                res.sendStatus(403);
            }else{
                await Company.findOne({
                    where:{
                        id: authData.user.companyId
                    }
                }).then(async (companyRecord) => {
                    if(!companyRecord){
                        res.status(403);
                        res.send();
                    }else{
                        if(companyRecord.name !== "SpaceCorner"){
                            res.status(403);
                            res.send();
                        }else{
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
        const {email, password} = req.body
        await User.findOne(
            {
                where:{
                    email:email
                }
            }).then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                if(record.active){
                    await Company.findOne({
                        where:{
                            id: record.companyId
                        }
                    }).then(async (companyRecord) => {
                        if(!companyRecord){
                            res.status(403);
                            res.send();
                        }else{
                            if(companyRecord.name !== "SpaceCorner"){
                                res.status(403);
                                res.send();
                            }else{
                                if(Security.verifyPassword(password, record.password)) {
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
                                    }, config.secrets.jwt_key, {expiresIn: '7 days'}, (err, token) => {
                                        if (err) res.send(err);
                                        res.json({token});
                                    });
                                }
                            }
                        }
                    })
                }else{
                    res.status(403);
                    res.send();
                }
            }
        });
    } catch(err) {
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
        const {email, password} = req.body
        await User.findOne(
            {
                where:{
                    email:email
                }
            }).then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                if(record.active){
                    if(Security.verifyPassword(password, record.password)){
                        jwt.sign({
                            user: {
                                id: record.id,
                                firstName: record.firstName,
                                lastName: record.lastName,
                                email: record.email,
                                company: await record.getCompany(),
                                active: record.active,
                                isAdmin: record.isAdmin,
                            }}, config.secrets.jwt_key, {expiresIn: '7 days'}, (err, token) => {
                            if(err) res.send(err);
                            res.json({token});
                        });
                    }else{
                        res.status(403);
                        res.send();
                    }
                }else{
                    res.status(403);
                    res.send();
                }
            }
        });
    } catch(err) {
        return next(err)
    }
}

exports.verify = function (req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.sendStatus(400);
    } else {
        jwt.verify(authHeader.split(' ')[1], config.secrets.jwt_key, (err, authData) => {
            if(err) return res.status(403).json(err);
            res.status(200).json({
                firstName: authData.user.firstName,
                lastName: authData.user.lastName,
                email: authData.user.email,
                company: authData.user.company
            });
        });
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
    }
}