const Company = require("../../src/models/Company");
const User = require("../../src/models/User");
const Team = require("../../src/models/Team");
const Office = require("../../src/models/Office");
const OfficeElement = require("../../src/models/OfficeElement");
const Security = require("../../src/services/Security");
const Utils = require('../../src/services/Utils');
const {v4: uuidv4} = require('uuid');
const TimeSheet = require("../../src/models/TimeSheet");
const {Op} = require("sequelize");
const Moment = require("moment");

const profileUrl = process.env.STORAGE_PROTOCOL + '://' + process.env.STORAGE_HOST + ':' + process.env.STORAGE_PORT + "/public/assets/demo/profile/";
const bannerUrl = process.env.STORAGE_PROTOCOL + '://' + process.env.STORAGE_HOST + ':' + process.env.STORAGE_PORT + "/public/assets/demo/banner/";

exports.generateDemo = async function() {
    // Test profile
    const companyTestId = await generateTestCompany();
    await generateOffices(companyTestId);
    const teams = await generateTeams(companyTestId);
    await generateAuthorizeTestProfile(companyTestId, teams);
    await generateRandomProfile(companyTestId, teams);
}

exports.generateDemoData = async function(){
    const company = await Company.findOne({where:{name:'Démo'}});
    let index = 0;
    let week = Utils.getCurrentWeek(index);
    const users = await company.getUsers();
    for(let i = 0; i < users.length; i++){
        await generateTimeSheet(users[i].id, week);
    }
    index += 1;
    week = Utils.getCurrentWeek(index);
    for(let i = 0; i < users.length; i++){
        await generateTimeSheet(users[i].id, week);
    }
    index -= 2; // -1
    week = Utils.getCurrentWeek(index);
    for(let i = 0; i < users.length; i++){
        await generateTimeSheet(users[i].id, week);
    }
    index -= 1; // -2
    week = Utils.getCurrentWeek(index);
    for(let i = 0; i < users.length; i++){
        await generateTimeSheet(users[i].id, week);
    }
    index -= 1; // -3
    week = Utils.getCurrentWeek(index);
    for(let i = 0; i < users.length; i++){
        await generateTimeSheet(users[i].id, week);
    }
}

async function generateOneOffice(companyId){
    const paris = await Office.findOne({
        where:{
            name: "Paris",
            companyId: companyId
        }
    }).then(async (record) => {
        if(!record) {
            return await Office.create({name: "Paris", capacity: 30, companyId: companyId});
        }else{
            return record;
        }
    })
    const paris_floor_1 = await OfficeElement.findOne({
        where:{
            name: "1er Etage",
            officeId: paris.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"1er Etage", type: 0, color:'#2CCCE4', capacity: 20, officeId: paris.id});
        }else{
            return record;
        }
    })
    const paris_room_1 = await OfficeElement.findOne({
        where:{
            name: "Salle Eiffel",
            officeId: paris.id,
            parentId: paris_floor_1.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Salle Eiffel", type: 1, color:'#DCE775', capacity: 1, officeId: paris.id, parentId: paris_floor_1.id});
        }else{
            return record;
        }
    })
}


async function generateOffices(companyId){
    const paris = await Office.findOne({
        where:{
            name: "Paris",
            companyId: companyId
        }
    }).then(async (record) => {
        if(!record) {
            return await Office.create({name: "Paris", capacity: 30, companyId: companyId});
        }else{
            return record;
        }
    })
    const londres = await Office.findOne({
        where:{
            name: "Londres",
            companyId: companyId
        }
    }).then(async (record) => {
        if(!record) {
            return await Office.create({name:"Londres", country: 'ENGLAND', capacity: 20, companyId: companyId});
        }else{
            return record;
        }
    })
    const newYork = await Office.findOne({
        where:{
            name: "New York",
            companyId: companyId
        }
    }).then(async (record) => {
        if(!record) {
            return await Office.create({name:"New York", country: 'USA', capacity: 10, companyId: companyId});
        }else{
            return record;
        }
    })

    const paris_floor_1 = await OfficeElement.findOne({
        where:{
            name: "1er Etage",
            officeId: paris.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"1er Etage", type: 0, color:'#2CCCE4', capacity: 20, officeId: paris.id});
        }else{
            return record;
        }
    })
    const paris_floor_2 = await OfficeElement.findOne({
        where:{
            name: "2e Etage",
            officeId: paris.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"2e Etage", type: 0, color:'#37D67A', capacity: 20, officeId: paris.id});
        }else{
            return record;
        }
    })
    const paris_room_1 = await OfficeElement.findOne({
        where:{
            name: "Salle Eiffel",
            officeId: paris.id,
            parentId: paris_floor_1.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Salle Eiffel", type: 1, color:'#DCE775', capacity: 10, officeId: paris.id, parentId: paris_floor_1.id});
        }else{
            return record;
        }
    })
    const paris_room_2 = await OfficeElement.findOne({
        where:{
            name: "Salle Hugo",
            officeId: paris.id,
            parentId: paris_floor_1.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Salle Hugo", type: 1, color:'#FF8A65', capacity: 10, officeId: paris.id, parentId: paris_floor_1.id});
        }else{
            return record;
        }
    })
    const paris_room_3 = await OfficeElement.findOne({
        where:{
            name: "Salle Verne",
            officeId: paris.id,
            parentId: paris_floor_2.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Salle Verne", type: 1, color:'#FF5733', capacity: 5, officeId: paris.id, parentId: paris_floor_2.id});
        }else{
            return record;
        }
    })
    const paris_room_4 = await OfficeElement.findOne({
        where:{
            name: "Salle Diderot",
            officeId: paris.id,
            parentId: paris_floor_2.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Salle Diderot", type: 1, color:'#BA68C8', capacity: 5, officeId: paris.id, parentId: paris_floor_2.id});
        }else{
            return record;
        }
    })
    const londres_floor_1 = await OfficeElement.findOne({
        where:{
            name: "1st Floor",
            officeId: londres.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"1st Floor", type: 0, color:'#2CCCE4', capacity: 10, officeId: londres.id});
        }else{
            return record;
        }
    })
    const londres_floor_2 = await OfficeElement.findOne({
        where:{
            name: "2nd Floor",
            officeId: londres.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"2nd Floor", type: 0, color:'#37D67A', capacity: 10, officeId: londres.id});
        }else{
            return record;
        }
    })
    const londres_room_1 = await OfficeElement.findOne({
        where:{
            name: "Joy",
            officeId: londres.id,
            parentId: londres_floor_1.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Joy", type: 1, color:'#DCE775', capacity: 8, officeId: londres.id, parentId: londres_floor_1.id});
        }else{
            return record;
        }
    })
    const londres_room_2 = await OfficeElement.findOne({
        where:{
            name: "Clarity",
            officeId: londres.id,
            parentId: londres_floor_1.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Clarity", type: 1, color:'#FF8A65', capacity: 2, officeId: londres.id, parentId: londres_floor_1.id});
        }else{
            return record;
        }
    })
    const londres_room_3 = await OfficeElement.findOne({
        where:{
            name: "Focus",
            officeId: londres.id,
            parentId: londres_floor_2.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Focus", type: 1, color:'#FF5733', capacity: 6, officeId: londres.id, parentId: londres_floor_2.id});
        }else{
            return record;
        }
    })
    const londres_room_4 = await OfficeElement.findOne({
        where:{
            name: "Radiance",
            officeId: londres.id,
            parentId: londres_floor_2.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Radiance", type: 1, color:'#BA68C8', capacity: 4, officeId: londres.id, parentId: londres_floor_2.id});
        }else{
            return record;
        }
    })

    const newyork_floor_1 = await OfficeElement.findOne({
        where:{
            name: "57th Floor",
            officeId: newYork.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"57th Floor", type: 0, color:'#2CCCE4', capacity: 10, officeId: newYork.id});
        }else{
            return record;
        }
    })
    const newyork_room_1 = await OfficeElement.findOne({
        where:{
            name: "Open Space",
            officeId: newYork.id,
            parentId: newyork_floor_1.id
        }
    }).then(async (record) => {
        if(!record) {
            return await OfficeElement.create({name:"Open Space", type: 1, color:'#BA68C8', capacity: 10, officeId: newYork.id, parentId: newyork_floor_1.id});
        }else{
            return record;
        }
    })
}

async function generateTimeSheet(userId, week){
    for(let i = 0; i < week.length; i++){
        await TimeSheet.findOne({
            where:{
                day: Moment(new Date(week[i].day)),
                userId: userId
            }
        }).then(async (record) => {
            if(!record) {
                let rand = Math.floor(Math.random() * 4) + 1
                await TimeSheet.create({day: week[i].day, morning:rand, afternoon:rand, userId: userId});
            }
        })
    }

}

async function generateTestCompany(){
    return await Company.findOne(
        {
            where:{
                name:'Démo'
            }
        }).then(async (record) => {
        if(!record) {
            const company = await Company.create({name:'Démo', activeOfficeHandler: true, active: true});
            return company.id;
        }else{
            return record.id;
        }
    })
}

async function generateTeams(companyId){
    let obj = {};
    await Team.findOne(
        {
            where:{
                name: 'RH',
                companyId: companyId
            }
        }
    ).then(async (record) => {
        if(!record) {
            await Team.create({
                name: 'RH',
                color: '#ba68c8',
                companyId: companyId
            }).then((res) => {
                obj.RH = res.id;
            })
        }
    })
    await Team.findOne(
        {
            where:{
                name: 'Finance',
                companyId: companyId
            }
        }
    ).then(async (record) => {
        if(!record) {
            await Team.create({
                name: 'Finance',
                color: '#F47373',
                companyId: companyId

            }).then((res) => {
                obj.Finance = res.id;
            })
        }
    })
    await Team.findOne(
        {
            where:{
                name: 'Marketing',
                companyId: companyId
            }
        }
    ).then(async (record) => {
        if(!record) {
            await Team.create({
                name: 'Marketing',
                color: '#37d67a',
                companyId: companyId
            }).then((res) => {
                obj.Marketing = res.id;
            })
        }
    })
    await Team.findOne(
        {
            where:{
                name: 'Tech',
                companyId: companyId
            }
        }
    ).then(async (record) => {
        if(!record) {
            await Team.create({
                name: 'Tech',
                color: '#ff8a65',
                companyId: companyId
            }).then((res) => {
                obj.Tech = res.id;
            })
        }
    })
    await Team.findOne(
        {
            where:{
                name: 'Direction',
                companyId: companyId
            }
        }
    ).then(async (record) => {
        if(!record) {
            await Team.create({
                name: 'Direction',
                color: '#697689',
                companyId: companyId
            }).then((res) => {
                obj.Direction = res.id;
            })
        }
    })
    await Team.findOne(
        {
            where:{
                name: 'Sales',
                companyId: companyId
            }
        }
    ).then(async (record) => {
        if(!record) {
            await Team.create({
                name: 'Sales',
                color: '#2ccce4',
                companyId: companyId
            }).then((res) => {
                obj.Sales = res.id;
            })
        }
    })
    return obj;
}

async function generateAuthorizeTestProfile(companyId, teams) {


    await User.findOne(
        {
            where:{
                email:"hadrien@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
                firstName: "Hadrien",
                lastName: "De Cournon",
                email: "hadrien@demo.com",
                position: 'CEO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
                phoneNumber: "0777467581",
                profilePicturePath: profileUrl+"hadrien.jpeg",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
            res.addTeams([teams.Direction, teams.Sales])
        }
    });

    await User.findOne(
        {
            where:{
                email:"victor@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
                firstName: "Victor",
                lastName: "Merveilleux du Vignaux",
                email: "victor@demo.com",
                position: 'CEO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
                phoneNumber: "0643359022",
                profilePicturePath: profileUrl+"victor.jpeg",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
            res.addTeams([teams.Direction, teams.Sales])
        }
    });
    await User.findOne(
        {
            where:{
                email:"louis@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
                firstName: "Louis",
                lastName: "Lacaille",
                email: "louis@demo.com",
                position: 'CPO',
                password: await Security.hashPassword("@demo&Ceercle2022"),
                phoneNumber: "0674497632",
                profilePicturePath: profileUrl+"louis.jpeg",
                active: true,
                isAdmin: true,
                companyId: companyId
            });
            res.addTeams([teams.Direction, teams.Tech])
        }
    });
    await User.findOne(
        {
            where:{
                email:"pierre@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeams([teams.Direction, teams.Tech])
        }
    });
}

async function generateRandomProfile(companyId, teams) {

    await User.findOne(
        {
            where:{
                email:"jean.dupont@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Sales)
        }
    });
    await User.findOne(
        {
            where:{
                email:"josiane.tarle@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Finance)

        }
    });
    await User.findOne(
        {
            where:{
                email:"marine.hablar@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.RH)
        }
    });
    await User.findOne(
        {
            where:{
                email:"serge.alloche@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Finance)
        }
    });
    await User.findOne(
        {
            where:{
                email:"matthieu.aignel@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Tech)
        }
    });
    await User.findOne(
        {
            where:{
                email:"marie.merard@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Marketing)
        }
    });
    await User.findOne(
        {
            where:{
                email:"marion.gerard@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Sales)
        }
    });
    await User.findOne(
        {
            where:{
                email:"sylvain.oule@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Sales)
        }
    });
    await User.findOne(
        {
            where:{
                email:"clement.sole@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Marketing)
        }
    });
    await User.findOne(
        {
            where:{
                email:"ruben.gorde@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Marketing)
        }
    });
    await User.findOne(
        {
            where:{
                email:"florence.vanberg@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Marketing)
        }
    });
    await User.findOne(
        {
            where:{
                email:"kim.wang@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Sales)
        }
    });
    await User.findOne(
        {
            where:{
                email:"danielle.komi@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.RH)
        }
    });
    await User.findOne(
        {
            where:{
                email:"frank.ravel@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Tech)
        }
    });
    await User.findOne(
        {
            where:{
                email:"laure.garcia@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Tech)
        }
    });
    await User.findOne(
        {
            where:{
                email:"paul.huaux@demo.com"
            }
        }).then(async (record) => {
        if (!record) {
            const res = await User.create({
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
            res.addTeam(teams.Sales)
        }
    });
}