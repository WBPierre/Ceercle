const fs = require("fs");
const hogan = require("hogan.js");
const Transporter = require('./MailerTransport');

exports.sendContact = async function(data) {
    let template = fs.readFileSync('./views/contact.html', 'utf-8');
    let compiledTemplate = hogan.compile(template);
    await Transporter.sendEmail({
        from: '"Ceercle 👻" <contact@ceercle.io>', // sender address
        to: "contact@ceercle.io", // list of receivers
        subject: "[Ceercle] Contact request", // Subject line
        text: "Information", // plain text body
        html: compiledTemplate.render(data) // html body
    });
}

exports.sendInvitation = async function(to, data) {
    let template = fs.readFileSync('./views/invitation.html', 'utf-8');
    let compiledTemplate = hogan.compile(template);
    return await Transporter.sendEmail({
        from: '"Ceercle 👻" <contact@ceercle.io>', // sender address
        to: to, // list of receivers
        subject: "[Ceercle] Invitation", // Subject line
        text: "Information", // plain text body
        html: compiledTemplate.render(data) // html body
    });
}

exports.sendActivationAccount = async function(to, data){
    let template = fs.readFileSync('./views/accountActivation.html', 'utf-8');
    let compiledTemplate = hogan.compile(template);
    return await Transporter.sendEmail({
        from: '"Ceercle 👻" <contact@ceercle.io>', // sender address
        to: to, // list of receivers
        subject: "[Ceercle] Votre compte a été activé !", // Subject line
        text: "Information", // plain text body
        html: compiledTemplate.render(data) // html body
    });
}

exports.sendActivationReport = async function(data){
    let template = fs.readFileSync('./views/activationReport.html', 'utf-8');
    let compiledTemplate = hogan.compile(template);
    return await Transporter.sendEmail({
        from: '"Ceercle 👻" <contact@ceercle.io>', // sender address
        to: ['pierre@ceercle.io', 'louis@ceercle.io', 'victor@ceercle.io', 'hadrien@ceercle.io'], // list of receivers
        subject: "[Ceercle] Activation Reporting", // Subject line
        text: "Information", // plain text body
        html: compiledTemplate.render(data) // html body
    });
}