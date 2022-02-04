const Contact = require("../../models/Contact");
const Mailer = require('../../services/Mailer');
const { body, param, validationResult } = require('express-validator')

/*
exports.preview = async function (req, res, next) {
    res.render('invitation', {firstName: 'Will', lastName: 'Will'});
}
*/

exports.sendContact = async function (req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const contact = await Contact.create(req.body);
        await Mailer.sendContact(req.body);
        res.json(contact)
    } catch(err) {
        return next(err)
    }
}

exports.listAllContacts = async function(req, res, next) {
    const contacts = await Contact.findAll({order:[['createdAt', 'DESC']]}, );
    res.json(contacts);
}

exports.getContact = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const id = req.param('id');
        const contact = await Contact.findAll({
            where: {
                id: id,
            }
        });
        res.json(contact);
    } catch(err) {
        return next(err)
    }
}


exports.validate = (method) => {
    switch(method) {
        case 'getContact': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'contactRequest': {
            return [
                body('firstName', 'firstName doesn\'t exist').exists(),
                body('firstName', 'firstName is not a string').isString(),
                body('lastName', 'lastName doesn\'t exist').exists(),
                body('lastName', 'lastName is not a string').isString(),
                body('companyName', 'companyName doesn\'t exist').exists(),
                body('companyName', 'companyName is not a string').isString(),
                body('fonction', 'fonction doesn\'t exist').exists(),
                body('fonction', 'fonction is not a string').isString(),
                body('zipCode', 'zipCode doesn\'t exist').exists(),
                body('zipCode', 'zipCode is not a string').isString(),
                body('zipCode', 'zipCode is not of length 5').isLength({min: 5, max : 5}),
                body('email', 'email doesn\'t exist').exists(),
                body('email', 'email is not an email').isEmail(),
                body('phoneNumber', 'phoneNumber doesn\'t exist').exists(),
                body('phoneNumber', 'phoneNumber is not a string').isString(),
            ]
        }
    }
}
