const User = require("../../models/User");
const { body, param } = require('express-validator')
const {v4: uuidv4} = require('uuid');
const Mailer = require("../../services/Mailer");
const UserRepository = require('../../repositories/UserRepository');
const CompanyRepository = require('../../repositories/CompanyRepository');


exports.listUsersOfCompany = async function (req, res) {
    const users = await UserRepository.findAllForCompany(req.params.companyId,[['createdAt', 'DESC']]);
    res.json(users);
}

exports.disableUser = async function(req, res, next) {
    const user = await UserRepository.findOneById(req.params.id);
    if(!user){
        res.status(404);
        res.send();
    }else{
        await user.update({isDeleted: true});
        res.status(200);
        res.send();
    }
}

exports.createInvitation = async function(req, res, next) {
    await UserRepository.findOneByEmailForCompany(req.body.email, req.body.companyId)
        .then(async (record) => {
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
                const company = await CompanyRepository.findOneById(req.body.companyId);
                if(company){
                    let link;
                    if(process.env.NODE_ENV === "development"){
                        link = process.env.STORAGE_PROTOCOL+"://"+process.env.STORAGE_HOST+"/app/invitation/"+token;
                    }else{
                        link = "https://app.ceercle.io/invitation/"+token;
                    }
                    await Mailer.sendInvitation(req.body.email, {companyName: company.name, link: link})
                    res.status(200);
                    res.send();
                }else{
                    res.status(404);
                    res.send();
                }
            }else{
                res.status(200);
                res.send();
            }
        })
}

exports.validate = (method) => {
    switch (method) {
        case 'listUsersOfCompany': {
            return [
                param('companyId', 'companyId is not a string').exists(),
                param('companyId', 'companyId is not a string').isNumeric()
            ]
        }
        case 'disableUser': {
            return [
                param('id', 'id is not a string').exists(),
                param('id', 'id is not a string').isNumeric()
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

