const Office = require('../../models/Office');
const { validationResult, param, body } = require("express-validator");
const Company = require("../../models/Company");
const CompanyRepository = require('../../repositories/CompanyRepository');
const IntegrationRepository = require('../../repositories/IntegrationRepository');
const Integration = require("../../models/Integration");
const axios = require("axios");


exports.verifySlack = async function (req, res, next) {
    const code = req.body.code;
    await CompanyRepository.findOneById(res.locals.auth.user.companyId)
        .then(async (record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                const data = {
                    client_id: process.env.SLACK_CLIENT_ID,
                    client_secret: process.env.SLACK_CLIENT_SECRET,
                    code: code
                };
                const result = await axios.post("https://slack.com/api/oauth.v2.access", data);
                console.log(result);

                if(result.data.ok){
                    let token = result.data.access_token;
                    await IntegrationRepository.findOneByNameForCompany('Slack', record.id)
                        .then(async (int) => {
                            if(!int){
                                await Integration.create({name: 'Slack', token: token});
                            }else{
                                await Integration.update({token: token});
                            }
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
    }
}