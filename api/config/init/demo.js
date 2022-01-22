const Company = require("../../src/models/Company");
const User = require("../../src/models/User");
const Security = require("../../src/services/Security");
const {v4: uuidv4} = require('uuid');

const profileUrl = 'http://' + process.env.STORAGE_HOST + ':' + process.env.STORAGE_PORT + "/public/assets/demo/profile/";
const bannerUrl = 'http://' + process.env.STORAGE_HOST + ':' + process.env.STORAGE_PORT + "/public/assets/demo/banner/";

exports.generateDemo = async function() {
    // Test profile
    const companyTestId = await generateTestCompany();
    await generateAuthorizeTestProfile(companyTestId);
    await generateRandomProfile(companyTestId);
}

async function generateTestCompany(){
    return await Company.findOne(
        {
            where:{
                name:'Démo'
            }
        }).then(async (record) => {
        if(!record) {
            const company = await Company.create({name:'Démo'});
            return company.id;
        }else{
            return record.id;
        }
    })
}

async function generateAuthorizeTestProfile(companyId) {
    await User.findOne(
        {
            where:{
                email:"hadrien@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Hadrien",
                lastName: "De Cournon",
                email: "hadrien@demo.com",
                position: 'CEO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
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
                email:"victor@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Victor",
                lastName: "Merveilleux du Vignaux",
                email: "victor@demo.com",
                position: 'CEO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
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
                email:"louis@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Louis",
                lastName: "Lacaille",
                email: "louis@demo.com",
                position: 'CPO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
                phoneNumber: "0674497632",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"pierre@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Pierre",
                lastName: "Delmer",
                email: "pierre@demo.com",
                position:'CTO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
                phoneNumber: "0667258173",
                profilePicturePath: profileUrl+"pierre.jpg",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
        }
    });
}

async function generateRandomProfile(companyId) {

    await User.findOne(
        {
            where:{
                email:"jean.dupont@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Jean",
                lastName: "Dupont",
                email: "jean.dupont@demo.com",
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"jean.jpg",
                position: 'Manager',
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"josiane.tarle@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Josiane",
                lastName: "Tarle",
                email: "josiane.tarle@demo.com",
                position: 'Comptable',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"josiane.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"marine.hablar@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Marine",
                lastName: "Hablar",
                email: "marine.hablar@demo.com",
                position: 'RH',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"marine.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"serge.alloche@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Serge",
                lastName: "Alloche",
                email: "serge.alloche@demo.com",
                position: 'Expert-comptable',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+'serge.jpg',
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"matthieu.aignel@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Matthieu",
                lastName: "Aignel",
                email: "matthieu.aignel@demo.com",
                position: 'Développeur',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"matthieu.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"marie.merard@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Marie",
                lastName: "Merard",
                email: "marie.merard@demo.com",
                position: 'Responsable marketing',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"marie.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"marion.gerard@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Marion",
                lastName: "Gerard",
                email: "marion.gerard@demo.com",
                position: 'Sales',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"marion.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"sylvain.oule@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Sylvain",
                lastName: "Oule",
                email: "sylvain.oule@demo.com",
                position: 'Sales',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+'sylvain.jpg',
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"clement.sole@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Clément",
                lastName: "Sole",
                email: "clement.sole@demo.com",
                position: 'Brand manager',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+'clement.jpg',
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"ruben.gorde@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Ruben",
                lastName: "Gorde",
                email: "ruben.gorde@demo.com",
                position: 'Designer',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"ruben.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"florence.vanberg@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Florence",
                lastName: "Vanberg",
                email: "florence.vanberg@demo.com",
                position: 'Responsable communication',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"florence.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"kim.wang@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Kim",
                lastName: "Wang",
                email: "kim.wang@demo.com",
                position: 'Sales manager',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"kim.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"danielle.komi@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Danielle",
                lastName: "Komi",
                email: "danielle.komi@demo.com",
                position: 'RH',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+'danielle.jpg',
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"frank.ravel@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Frank",
                lastName: "Ravel",
                email: "frank.ravel@demo.com",
                position: 'Développeur sénior',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"frank.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"laure.garcia@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Laure",
                lastName: "Garcia",
                email: "laure.garcia@demo.com",
                position: 'Développeuse',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"laure.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
    await User.findOne(
        {
            where:{
                email:"paul.huaux@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            await User.create({
                firstName: "Paul",
                lastName: "Huaux",
                email: "paul.huaux@demo.com",
                position: 'Sales',
                password: await Security.hashPassword(uuidv4()),
                phoneNumber: "0777777777",
                profilePicturePath: profileUrl+"paul.jpg",
                active: true,
                isAdmin: false,
                companyId: companyId
            });
        }
    });
}