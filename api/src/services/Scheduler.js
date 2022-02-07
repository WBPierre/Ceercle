const Company = require ('../models/Company');
const moment = require("moment");
const Mailer = require('./Mailer');

exports.activateCompanies = async function() {
    const toActivate = await Company.findAll({
        where:{
            activation_day: moment().format('YYYY-MM-DD')
        }
    });
    for(const company of toActivate){
        const users = await company.getUsers();
        for(let i = 0; i < users.length; i++){
            if(!users[i].active && !users[i].isDeleted) {
                let link;
                if(process.env.NODE_ENV === "development"){
                    link = process.env.STORAGE_PROTOCOL+"://"+process.env.STORAGE_HOST+"/app/invitation/"+users[i].activation_token;
                }else{
                    link = "https://app.ceercle.io/invitation/"+users[i].activation_token;
                }
                await Mailer.sendInvitation(users[i].email, {companyName: company.name, link: link})
            }
        }
        await company.update({active: true});
    }
}