const Company = require ('../models/Company');
const moment = require("moment");
const Mailer = require('./Mailer');

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