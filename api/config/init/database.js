const Security = require('../../src/services/Security');
const Company = require("../../src/models/Company");
const User = require("../../src/models/User");

exports.initDatabase = async function() {
    const companyId = await generateSpacecorner();
    await generateAdminProfiles(companyId);

    // Test profile
    const companyTestId = await generateTestCompany();
    await generateTestProfile(companyTestId);
}

async function generateSpacecorner(){
    return await Company.findOne(
        {
            where:{
                name:'SpaceCorner'
            }
        }).then(async (record) => {
            if(!record) {
                const company = await Company.create({name:'SpaceCorner'});
                return company.id;
            }else{
                return record.id;
            }
    })
}

async function generateTestCompany(){
    return await Company.findOne(
        {
            where:{
                name:'Company'
            }
        }).then(async (record) => {
        if(!record) {
            const company = await Company.create({name:'Company'});
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
                email:"victor@spacecorner.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Victor",
                lastName: "Merveilleux du Vignaux",
                email: "victor@spacecorner.io",
                password: await Security.hashPassword("admin"),
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
                email:"hadrien@spacecorner.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Hadrien",
                lastName: "De Cournon",
                email: "hadrien@spacecorner.io",
                password: await Security.hashPassword("admin"),
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
                email:"pierre@spacecorner.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Pierre",
                lastName: "Delmer",
                email: "pierre@spacecorner.io",
                password: await Security.hashPassword("admin"),
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
                email:"louis@spacecorner.io"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Louis",
                lastName: "Lacaille",
                email: "louis@spacecorner.io",
                password: await Security.hashPassword("admin"),
                phoneNumber: "0674497632",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
}


async function generateTestProfile(companyId) {
    await User.findOne(
        {
            where:{
                email:"test@test.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Test",
                lastName: "Test",
                email: "test@test.com",
                password: await Security.hashPassword("test"),
                phoneNumber: "test",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
}