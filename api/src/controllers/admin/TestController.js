const Company = require("../../models/Company");
const axios = require("axios");
const ThirdPartyService = require("../../services/ThirdPartyService");


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
                    //await ThirdPartyService.setSlackStatus(slackUserList[k].id, hasIntegration[0].token, users[j].lang, 1);
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