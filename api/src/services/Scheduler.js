const Company = require ('../models/Company');
const TimeSheet = require ('../models/TimeSheet');
const moment = require("moment");
const Mailer = require('./Mailer');
const axios = require("axios");
const ThirdPartyService = require('./ThirdPartyService');

exports.activateCompanies = async function() {
    let day = moment().tz('Europe/Paris').format('YYYY-MM-DD');
    let hour = parseInt(moment().tz('Europe/Paris').format('HH').toString());
    const toActivate = await Company.findAll({
        where:{
            activation_day: day,
            activation_hour: hour
        }
    });
    for(const company of toActivate){
        let reportObject = {
            companyName: company.name,
            activation_day: moment(company.activation_day, 'YYYY-MM-DD').format('DD/MM/YYYY').toString(),
            activation_hour: company.activation_hour,
            success: 0,
            fail: 0
        }
        const users = await company.getUsers();
        for(let i = 0; i < users.length; i++){
            if(!users[i].active && !users[i].isDeleted) {
                let link;
                if(process.env.NODE_ENV === "development"){
                    link = process.env.STORAGE_PROTOCOL+"://"+process.env.STORAGE_HOST+"/app/invitation/"+users[i].activation_token;
                }else{
                    link = "https://app.ceercle.io/invitation/"+users[i].activation_token;
                }
                let res = await Mailer.sendInvitation(users[i].email, {companyName: company.name, link: link});
                if(res.response.split(' ')[0] === "250"){
                    reportObject.success += 1;
                }else{
                    reportObject.fail += 1;
                }
            }
        }
        await company.update({active: true});
        console.log(await Mailer.sendActivationReport(reportObject));
    }
}

exports.updateSlackStatus = async function(){
    let day = moment().tz('Europe/Paris').format('YYYY-MM-DD').toString();
    let hour = parseInt(moment().tz('Europe/Paris').format('HH').toString());
    const companies = await Company.findAll({where: {active: true}});
    for(let i = 0; i < companies.length; i++){
        let hasIntegration = await companies[i].getIntegrations({where:{name: 'Slack'}});
        if(hasIntegration.length !== 0){
            let getSlackUserList = await axios.post('https://slack.com/api/users.list', new URLSearchParams({token: hasIntegration[0].token}));
            let slackUserList = getSlackUserList.data.members;
            const users = await companies[i].getUsers({where:{active: true, isDeleted:false}});
            for(let j = 0; j < users.length; j++){
                if(users[j].defaultWorkingMorningHour === parseInt(hour)){
                    let timesheet = await TimeSheet.findOne({where:{day: day, userId: users[j].id}});
                    if(timesheet){
                        for(let k = 0; k < slackUserList.length; k++){
                            if(slackUserList[k].profile.email === users[j].email){
                                await ThirdPartyService.setSlackStatus(slackUserList[k].id, hasIntegration[0].token, users[j].lang, timesheet.morning);
                                break;
                            }
                        }
                    }
                }else if(users[j].defaultWorkingAfternoonHour === parseInt(hour)){
                    for(let k = 0; k < slackUserList.length; k++){
                        if(slackUserList[k].profile.email === users[j].email){
                            await ThirdPartyService.unsetSlackStatus(slackUserList[k].id, hasIntegration[0].token);
                            break;
                        }
                    }
                }else if (parseInt(hour) === 13){
                    let timesheet = await TimeSheet.findOne({where:{day: day, userId: users[j].id}});
                    if(timesheet){
                        for(let k = 0; k < slackUserList.length; k++){
                            if(slackUserList[k].profile.email === users[j].email){
                                await ThirdPartyService.setSlackStatus(slackUserList[k].id, hasIntegration[0].token, users[j].lang, timesheet.afternoon);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}

exports.sendSlackReminder = async function(){
    const companies = await Company.findAll({where: {active: true}});
    for(let i = 0; i < companies.length; i++){
        let hasIntegration = await companies[i].getIntegrations({where:{name: 'Slack'}});
        if(hasIntegration.length !== 0) {
            let getSlackUserList = await axios.post('https://slack.com/api/users.list', new URLSearchParams({token: hasIntegration[0].token}));
            let slackUserList = getSlackUserList.data.members;
            const users = await ceercle.getUsers({where: {active: true, isDeleted: false}});
            for (let j = 0; j < users.length; j++) {
                for(let k = 0; k < slackUserList.length; k++){
                    if(slackUserList[k].profile.email === users[j].email){
                        await axios.post("https://slack.com/api/chat.postMessage", {
                            channel: slackUserList[k].id,
                            text: users[j].lang === "Français" ? "N'oubliez pas de mettre à jour votre déclaration pour la semaine prochaine sur https://app.ceercle.io !" : "Don't forget to update your status for next week on https://app.ceercle.io !",
                            as_user: true
                        }, {
                            headers:{
                                Authorization: 'Bearer ' + hasIntegration[0].token,
                                'Content-Type': 'application/json'
                            }
                        }).then((res) => {
                            console.log(res)
                        }).catch((err) => {
                            console.log(err.response);
                        })
                        break;
                    }
                }
            }
        }
    }
}