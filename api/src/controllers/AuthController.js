const {param, body, validationResult} = require("express-validator");
const User = require('../models/User');
const Security = require('../services/Security');
const jwt = require('jsonwebtoken');
const config = require('../../config/secrets');


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
            }).then((record) => {
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
                                companyId: record.companyId,
                                active: record.active,
                                isAdmin: record.isAdmin
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
                email: authData.user.email
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