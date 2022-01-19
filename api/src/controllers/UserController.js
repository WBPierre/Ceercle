const User = require("../models/User");
const Security = require('../services/Security');
const { body, param, validationResult } = require('express-validator')
const jwt = require("jsonwebtoken");


exports.listAllUsers = async function (req, res) {
    const users = await User.findAll({
        where:{companyId: res.locals.auth.user.company.id},
        order:[['createdAt', 'DESC']]
    } );
    res.json(users);
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
                where:{
                    id: res.locals.auth.user.id
                }
            }).then(async (record) => {
                if (!record) {
                    res.status(404);
                    res.send();
                }else{
                    if(await Security.verifyPassword(req.body.oldPassword, record.password)) {
                        let password = await Security.hashPassword(req.body.newPassword);
                        record.update({password: password}).then((updated) => {
                            res.json(updated);
                        })
                    }
                }
         })
    } catch(err) {
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
    } catch(err) {
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
        const id = req.params.id;
        await User.findOne(
            {
                where:{
                    id:id
                }
            }).then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                record.update(req.body).then((updated) => {
                    res.json(updated);
                })
            }
        });
    } catch(err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch(method) {
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
        case 'updatePassword': {
            return [
                body('oldPassword', 'oldPassword is not a string').exists(),
                body('oldPassword', 'oldPassword is not a string').isString(),
                body('newPassword', 'newPassword is not a string').exists(),
                body('newPassword', 'newPassword is not a string').isString(),
            ]
        }
    }
}

