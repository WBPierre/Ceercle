const Company = require("../../models/Company");
const axios = require("axios");


exports.testSlack = async function(req, res, next) {
    const ceercle = await Company.findOne({where: {name:'Ceercle', admin: true}});
    let hasIntegration = await ceercle.getIntegrations({where:{name: 'Slack'}});
    if(hasIntegration.length !== 0) {
        let getSlackUserList = await axios.post('https://slack.com/api/users.list', new URLSearchParams({token: hasIntegration[0].token}));
        let slackUserList = getSlackUserList.data.members;
        const users = await ceercle.getUsers({where: {active: true, isDeleted: false}});
        for (let j = 0; j < users.length; j++) {
            for(let k = 0; k < slackUserList.length; k++){
                if(slackUserList[k].profile.email === users[j].email){
                    console.log('FOUND ', users[j].email);
                    await axios.post("https://slack.com/api/chat.postMessage", {
                        token: hasIntegration[0].token,
                        channel: slackUserList[k].id,
                        text: users[j].lang === "fr" ? "N'oubliez pas de mettre à jour votre déclaration pour la semaine prochaine sur https://app.ceercle.io !" : "Don't forget to update your status for next week on https://app.ceercle.io !"
                    }).then((res) => {
                        console.log(res)
                    }).catch((err) => {
                        console.log(err.response);
                    })
                    break;
                }
            }
        }
    }else{
        res.status(404);
        res.send();
    }
    res.status(200);
    res.send();
}