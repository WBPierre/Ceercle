const Office = require('../../models/Office');
const { validationResult, param, body } = require("express-validator");
const Company = require("../../models/Company");
const CompanyRepository = require('../../repositories/CompanyRepository');
const UserIntegrationRepository = require('../../repositories/UserIntegrationRepository');
const IntegrationRepository = require('../../repositories/IntegrationRepository');
const Integration = require("../../models/Integration");
const UserIntegration = require("../../models/UserIntegration");
const axios = require("axios");
const {google} = require('googleapis');

exports.removeGoogleCalendar = async function (req, res, next) {
    let oldRecord = await UserIntegrationRepository.findOneByNameForUser('google_calendar', res.locals.auth.user.id);
    if(!oldRecord){
        res.status(404);
        res.send();
    }else{
        await oldRecord.destroy();
        res.status(200);
        res.send();
    }
}

exports.hasGoogleCalendarConnected = async function (req, res, next) {
    let oldRecord = await UserIntegrationRepository.findOneByNameForUser('google_calendar', res.locals.auth.user.id);
    if(!oldRecord){
        res.json({connected:false});
    }else{
        res.json({connected:true});
    }
}

exports.connectGoogleCalendar = async function(req, res, next) {
    const oauth2Client = new google.auth.OAuth2(
        process.env.CALENDAR_CLIENT_ID,
        process.env.CALENDAR_CLIENT_SECRET,
        process.env.NODE_ENV === "development" ? "https://dev.ceercle.io/app/verify/google" : "https://app.ceercle.io/verify/google"
    );
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',

        // If you only need one scope you can pass it as a string
        scope: 'https://www.googleapis.com/auth/calendar'
    });
    const {tokens} = await oauth2Client.getToken(req.body.code)
    oauth2Client.setCredentials(tokens);
    let oldRecord = await UserIntegrationRepository.findOneByNameForUser('google_calendar', res.locals.auth.user.id);
    if(!oldRecord){
        await UserIntegration.create({name:'google_calendar', accessToken: tokens.access_token, expirationTime: tokens.expiry_date, refreshToken: tokens.refresh_token, userId:res.locals.auth.user.id});
    }else{
        await oldRecord.update({accessToken: tokens.access_token, expirationTime: tokens.expiry_date, refreshToken: tokens.refresh_token});
    }
    res.status(200);
    res.send();
}


exports.getGoogleCalendarAuthUrl = async function(req, res, next) {
    const oauth2Client = new google.auth.OAuth2(
        process.env.CALENDAR_CLIENT_ID,
        process.env.CALENDAR_CLIENT_SECRET,
        process.env.NODE_ENV === "development" ? "https://dev.ceercle.io/app/verify/google" : "https://app.ceercle.io/verify/google"
    );

// generate a url that asks permissions for Google Calendar scope
    const scopes = [
        'https://www.googleapis.com/auth/calendar'
    ];

    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',

        // If you only need one scope you can pass it as a string
        scope: scopes
    });
    res.json({url: url});
}

exports.verifySlack = async function (req, res, next) {
    const code = req.body.code;
    await CompanyRepository.findOneById(res.locals.auth.user.companyId)
        .then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                const result = await axios.post("https://slack.com/api/oauth.v2.access", new URLSearchParams({
                    client_id: process.env.SLACK_CLIENT_ID,
                    client_secret: process.env.SLACK_CLIENT_SECRET,
                    code: code
                }));
                if(result.data.ok){
                    let token = result.data.access_token;
                    await IntegrationRepository.findOneByNameForCompany('Slack', record.id)
                        .then(async (int) => {
                            if(!int){
                                await Integration.create({name: 'Slack', token: token, companyId: record.id});
                            }else{
                                await int.update({token: token});
                            }
                            console.log('Slack updated for company :', record.name);
                            res.status(200);
                            res.send();
                        })
                }else{
                    res.status(406);
                    res.send();
                }
            }
        });
    res.status(200);
    res.send();
}

exports.validate = (method) => {
    switch (method) {
        case 'verifySlack': {
            return [
                body('code', 'id doesn\'t exist').exists(),
                body('code', 'id is not a number').isString()
            ]
        }
        case 'connectGoogleCalendar' : {
            return [
                body('code', 'id doesn\'t exist').exists(),
                body('code', 'id is not a number').isString()
            ]
        }
    }
}