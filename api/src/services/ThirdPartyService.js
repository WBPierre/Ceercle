const axios = require("axios");
const UserIntegrationRepository = require("../repositories/UserIntegrationRepository");
const UserRepository = require('../repositories/UserRepository');
const {google} = require("googleapis");


exports.setTeamSheetInGoogleCalendar = async function(userId, day, morning, afternoon){
    let user = await UserRepository.findOneById(userId);
    if(!user) return;
    let record = await UserIntegrationRepository.findOneByNameForUser('google_calendar', userId);
    if(!record) return;
    const oauth2Client = new google.auth.OAuth2(
        process.env.CALENDAR_CLIENT_ID,
        process.env.CALENDAR_CLIENT_SECRET,
        "http://localhost/app/verify/google"
    );
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',

        // If you only need one scope you can pass it as a string
        scope: 'https://www.googleapis.com/auth/calendar'
    });
    oauth2Client.setCredentials({
        access_token: record.accessToken,
        refresh_token: record.refreshToken,
        expiry_date: record.expirationTime
    })
    if(record.expirationTime < Date.now()){
        oauth2Client.refreshAccessToken( async (error, tokens) => {
            if( !error ){
                console.log('NO ERROR in G CALENDAR');
                await record.update({accessToken: tokens.access_token, expirationTime: tokens.expiry_date, refreshToken: tokens.refresh_token});
            }
        })
    }
    let calendar = google.calendar({version: 'v3', oauth2Client});
    let before = new Date(day);
    before.setDate(before.getDate()-1);
    await calendar.events.list({
        auth: oauth2Client,
        calendarId: 'primary',
        q: "Activity powered by Ceercle.io",
        timeMin: before.toISOString(),
        timeMax: new Date(day).toISOString(),
    }, async (err, res) => {
        if (err) {
            console.log(err);
        } else {
            for(let i = 0; i < res.data.items.length; i++){
                await calendar.events.delete({
                    auth: oauth2Client,
                    calendarId: 'primary',
                    eventId: res.data.items[i].id
                })
            }
        }
    });
    if(morning === afternoon){
        await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            resource: {
                'summary': getTraduction(morning, user.lang),
                'description': 'Activity powered by Ceercle.io',
                'start': {
                    'date': day,
                    'timeZone':'utc'
                },
                'end': {
                    'date': day,
                    'timeZone':'utc'
                },
                'attendees': [],
                'colorId' : getColorForType(morning),
                'status' : 'confirmed'
            },
        }, (err, res) => {
            if (err) {
                console.log(err);
            }
        });
    }else{
        await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            resource: {
                'summary': getTraduction(morning, user.lang) + " - " + getTraductionHalfDay(true, user.lang),
                'description': 'Activity powered by Ceercle.io',
                'start': {
                    'date': day,
                    'timeZone':'utc'
                },
                'end': {
                    'date': day,
                    'timeZone':'utc'
                },
                'attendees': [],
                'colorId' : getColorForType(morning),
                'status' : 'confirmed'
            },
        }, (err, res) => {
            if (err) {
                console.log(err);
            }
        });
        await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            resource: {
                'summary': getTraduction(afternoon, user.lang) + " - " + getTraductionHalfDay(false, user.lang),
                'description': 'Activity powered by Ceercle.io',
                'start': {
                    'date': day,
                    'timeZone':'utc'
                },
                'end': {
                    'date': day,
                    'timeZone':'utc'
                },
                'attendees': [],
                'colorId' : getColorForType(afternoon),
                'status' : 'confirmed'
            },
        }, (err, res) => {
            if (err) {
                console.log(err);
            }
        });
    }
}

function getTraductionHalfDay(morning, lang){
    if(morning) {
        if(lang === "Français"){
            return "Matin";
        }else{
            return "Morning"
        }
    }else{
        if(lang === "Français"){
            return "Après-midi";
        }else{
            return "Afternoon"
        }
    }
}

function getTraduction(type, lang){
    switch(type){
        case 1:
            return lang ==="Français" ? 'Bureau' : 'Office';
        case 2:
            return lang ==="Français" ? 'Télétravail' : 'Remote';
        case 3:
            return lang ==="Français" ? 'Déplacement' : 'Away';
        case 4:
            return lang ==="Français" ? 'Off' : 'Off';
    }
}

function getColorForType(type){
    switch(type){
        case 1: return 2;
        case 2: return 9;
        case 3: return 3;
        case 4: return 5;
    }
}


exports.setSlackStatus = async function(userId, token, lang, type) {
    let status = getStatus(lang, type);
    const resources = {
        user: userId,
        profile: status
    }
    let result = await axios.post('https://slack.com/api/users.profile.set', resources,
        {
            headers:{
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }).then((res) => console.log(res)).catch((err) => {console.log(err.response)});
    return result.data.ok;
}

exports.unsetSlackStatus = async function(userId, token) {
    let status = {status_text: "", status_emoji:""};
    const resources = {
        user: userId,
        profile: status
    }
    let result = await axios.post('https://slack.com/api/users.profile.set', resources, {
        headers:{
            Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
        }
    });
    return result.data.ok;
}


function getStatus(lang, type){
    return {
        status_text: getTextStatus(lang, type),
        status_emoji: getEmojiStatus(type),
        status_expiration: 0
    }
}

function getEmojiStatus(type) {
    switch(type){
        case 0:
            return ":white_cercle:";
        case 1:
            return ":office:";
        case 2:
            return ":technologist:";
        case 3:
            return ":train2:";
        case 4:
            return ":palm_tree:";
    }
}

function getTextStatus(lang, type){
    let text= "";
    switch(type){
        case 0:
            break;
        case 1:
            text = lang === "Français" ? "Au bureau" : "At the office"
            break;
        case 2:
            text = lang === "Français" ? "En télétravail" : "Remote"
            break;
        case 3:
            text = lang === "Français" ? "En déplacement" : "Away"
            break;
        case 4:
            text = lang === "Français" ? "Off" : "Off"
            break;
    }
    return text;
}