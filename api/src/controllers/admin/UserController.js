const User = require("../../models/User");
const Company = require('../../models/Company');
const Security = require('../../services/Security');
const { body, param, validationResult } = require('express-validator')
const jwt = require("jsonwebtoken");
const uploadProfile = require('../../middlewares/UploadProfileMiddleware');
const uploadBanner = require('../../middlewares/UploadBannerMiddleware');
const Moment = require('moment');
const {v4: uuidv4} = require('uuid');
const Mailer = require("../../services/Mailer");


exports.listUsersOfCompany = async function (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({errors: errors.array()});
            return;
        }
        const users = await User.findAll({
            where:{
                companyId: req.params.companyId
            },
            order: [['createdAt', 'DESC']]
        })
        res.json(users);
    } catch (err) {
        return next(err)
    }
}

exports.createInvitation = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({errors: errors.array()});
            return;
        }
        await User.findOne({
            where:{
                companyId: req.body.companyId,
                email: req.body.email
            }
        }).then(async (record) => {
            const token = uuidv4();
            if(!record){
                await User.create({email: req.body.email, companyId: req.body.companyId, isAdmin: req.body.admin, activation_token: token });
            }else{
                if(!record.active){
                    await record.update({email: req.body.email, companyId: req.body.companyId, isAdmin: req.body.admin, activation_token: token });
                }else{
                    res.status(403);
                    res.send();
                }
            }
            if(req.body.type){
                const company = await Company.findOne({
                    where:{
                        id: req.body.companyId
                    }
                });
                if(company){
                    let link;
                    if(process.env.NODE_ENV === "development"){
                        link = process.env.STORAGE_PROTOCOL+"://"+process.env.STORAGE_HOST+"/app/invitation/"+token;
                    }else{
                        link = "https://app.ceercle.io/invitation/"+token;
                    }
                    Mailer.sendInvitation(req.body.email, {companyName: company.name, link: link})
                    res.status(200);
                    res.send();
                }else{
                    res.status(404);
                    res.send();
                }
            }
        })
    } catch (err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'listUsersOfCompany': {
            return [
                param('companyId', 'companyId is not a string').exists(),
                param('companyId', 'companyId is not a string').isNumeric()
            ]
        }
        case 'createInvitation': {
            return [
                body('companyId', 'companyId doesn\'t exist').exists(),
                body('companyId', 'companyId is not a string').isNumeric(),
                body('email', 'email doesn\'t exist').exists(),
                body('email', 'email is not a string').isString(),
                body('admin', 'admin doesn\'t exist').exists(),
                body('admin', 'admin is not a boolean').isBoolean(),
                body('type', 'type doesn\'t exist').exists(),
                body('type', 'type is not a boolean').isBoolean(),
            ]
        }
    }
}

