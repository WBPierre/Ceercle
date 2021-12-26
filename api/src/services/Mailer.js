const nodemailer = require('nodemailer');
const fs = require("fs");
const hogan = require("hogan.js");
let template = fs.readFileSync('./views/contact.html', 'utf-8');
let compiledTemplate = hogan.compile(template);

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "", // generated ethereal user
        pass: "", // generated ethereal password
    },
});

exports.sendContact = async function(data) {
    await transporter.sendMail({
        from: '"SpaceCorner 👻" <contact@spacecorner.io>', // sender address
        to: "contact@spacecorner.io", // list of receivers
        subject: "[SpaceCorner] Contact request", // Subject line
        text: "Information", // plain text body
        html: compiledTemplate.render(data) // html body
    });
}