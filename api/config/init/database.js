const Security = require('../../src/services/Security');
const Company = require("../../src/models/Company");
const User = require("../../src/models/User");
const Demo = require('./demo');

exports.initDatabase = async function() {
    const companyId = await generateCeercle();
    await generateAdminProfiles(companyId);
    await Demo.generateDemo();
    await Demo.generateDemoData();
}

async function generateCeercle(){
    return await Company.findOne(
        {
            where:{
                name:'Ceercle'
            }
        }).then(async (record) => {
            if(!record) {
                const company = await Company.create({name:'Ceercle'});
                return company.id;
            }else{
                return record.id;
            }
    })
}

async function generateAdminProfiles(companyId) {
    await User.findOne(
        {
            where:{
                email:"victor@ceercle.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Victor",
                lastName: "Merveilleux du Vignaux",
                email: "victor@ceercle.io",
                password: await Security.hashPassword("Aw$no$AFEpassword2022"),
                phoneNumber: "0643359022",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"hadrien@ceercle.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Hadrien",
                lastName: "De Cournon",
                email: "hadrien@ceercle.io",
                password: await Security.hashPassword("Aw$no$AFEpassword2022"),
                phoneNumber: "0777467581",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"pierre@ceercle.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Pierre",
                lastName: "Delmer",
                email: "pierre@ceercle.io",
                password: await Security.hashPassword("Aw$no$AFEpassword2022"),
                phoneNumber: "0667258173",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"louis@ceercle.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Louis",
                lastName: "Lacaille",
                email: "louis@ceercle.io",
                password: await Security.hashPassword("Aw$no$AFEpassword2022"),
                phoneNumber: "0674497632",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
}