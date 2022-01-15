const fs = require("fs");
const hogan = require("hogan.js");
let template = fs.readFileSync('./views/contact.html', 'utf-8');
let compiledTemplate = hogan.compile(template);
const Transporter = require('./MailerTransport');

exports.sendContact = async function(data) {
    await Transporter.sendEmail({
        from: '"Ceercle 👻" <contact@ceercle.io>', // sender address
        to: "contact@ceercle.io", // list of receivers
        subject: "[Ceercle] Contact request", // Subject line
        text: "Information", // plain text body
        html: compiledTemplate.render(data) // html body
    });
}