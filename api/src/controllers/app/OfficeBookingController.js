const OfficeBooking = require("../../models/OfficeBooking");
const {validationResult, param, body} = require("express-validator");
const OfficeElement = require("../../models/OfficeElement");
const Office = require("../../models/Office");
const OfficeElementService = require('../../services/OfficeElementService');
const OfficeBookingRepository = require('../../repositories/OfficeBookingRepository');
const OfficeElementRepository = require('../../repositories/OfficeElementRepository');
const OfficeRepository = require('../../repositories/OfficeRepository');
const UserRepository = require('../../repositories/UserRepository');


exports.getBookingsForOffice = async function(req, res, next) {
    const result = await OfficeRepository.findAllForCompany(res.locals.auth.user.companyId);
    const users = await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId);
    let response = [];
    for(let i = 0; i < result.length ; i++){
        let obj = {
            id: result[i].id,
            name: result[i].name,
            capacity: result[i].capacity,
            maxCapacity: result[i].maxCapacity,
            type: 'office',
            users: []
        }
        response.push(obj);
    }
    for(let i = 0; i < users.length; i++){
        let booking = await OfficeBookingRepository.findOneByDayAndUserId(req.params.day, users[i].id);
        if(booking){
            let officeElement = await OfficeElementRepository.findOneById(booking.officeElementId);
            if(officeElement){
                let index = response.findIndex((x) => x.id === officeElement.officeId);
                if(index !== -1) {
                    response[index].users.push({
                        firstName: users[i].firstName,
                        lastName: users[i].lastName,
                        profilePicturePath: users[i].profilePicturePath
                    });
                }
            }
        }
    }
    res.json(response);
}

exports.getBookingsForOfficeElement = async function (req, res, next) {
    if(req.params.parentId === "null"){
        req.params.parentId = null;
    }
    const result = await OfficeElementRepository.findAllByOfficeIdAndParentId(req.params.id, req.params.parentId,  [["createdAt", "ASC"]]);
    const users = await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId);
    let response = [];
    for(let i = 0; i < result.length ; i++){
        let obj = {
            id: result[i].id,
            name: result[i].name,
            capacity: result[i].capacity,
            maxCapacity: result[i].maxCapacity,
            type: result[i].type,
            backgroundPath: result[i].backgroundPath,
            size: result[i].size,
            x: result[i].x,
            y: result[i].y,
            users: []
        }
        response.push(obj);
    }
    for(let i = 0; i < users.length; i++){
        let booking = await OfficeBookingRepository.findOneByDayAndUserId(req.params.day, users[i].id);
        if(booking){
            let officeElement = await OfficeElementRepository.findOneById(booking.officeElementId);
            if(officeElement.officeId === parseInt(req.params.id)){
                let parentId = officeElement.parentId;
                let bookingReverseTree = [];
                bookingReverseTree.push(officeElement);
                while(parentId !== null){
                    let tmp = await OfficeElementRepository.findOneById(parentId);
                    bookingReverseTree.push(tmp);
                    parentId = tmp.parentId;
                }
                for(let j = 0; j < bookingReverseTree.length; j++){
                    let index = response.findIndex((x) => x.id === bookingReverseTree[j].id);
                    if(index !== -1) {
                        response[index].users.push({
                            id: users[i].id,
                            firstName: users[i].firstName,
                            lastName: users[i].lastName,
                            profilePicturePath: users[i].profilePicturePath
                        });
                    }
                }
            }
        }
    }
    res.json(response);
}

exports.removeOfficeBooking = async function(req, res, next){
    await OfficeBookingRepository.findOneByDayAndUserId(req.params.day, res.locals.auth.user.id)
        .then(async (record)=> {
            if(!record){
                res.status(404);
                res.send();
            }else{
                await record.destroy();
                res.status(200);
                res.send();
            }
        })
}

exports.setOfficeBooking = async function (req, res, next){
    const {available, used} = await OfficeElementService.verifyRoomOccupancy(req.body.officeElementId, req.body.day);
    if(!available){
        res.status(403);
        res.send();
    }else{
        await OfficeBookingRepository.findOneByDayAndUserId(req.body.day, res.locals.auth.user.id)
            .then(async (record)=> {
                if(!record){
                    const officeBooking = await OfficeBooking.create({day: req.body.day, morning: req.body.morning, afternoon: req.body.afternoon, officeElementId: req.body.officeElementId, userId: res.locals.auth.user.id})
                    res.json(officeBooking);
                }else{
                    record.update({morning: req.body.morning, afternoon: req.body.afternoon, officeElementId: req.body.officeElementId}).then((updated) => {
                        res.json(updated);
                    })
                }
            })
    }
}

exports.setAutomaticBooking = async function (req, res, next){
    let officeBookingMandatory = req.body.officeBookingMandatory
    let favoriteDeskId = req.body.officeElementId
    let response = {status: ""}
    if(!officeBookingMandatory && favoriteDeskId == 0){
        response.status = "validated"
    }
    if(!officeBookingMandatory && favoriteDeskId > 0){
        let favoriteOfficeElement = await OfficeElementRepository.findOneById(favoriteDeskId);
        let {available, used} = await OfficeElementService.verifyRoomOccupancy(favoriteDeskId, req.body.day);
        if(available){
            await OfficeBooking.create({day: req.body.day, morning: true, afternoon: true, officeElementId: favoriteDeskId, userId: res.locals.auth.user.id})
            response.status = "validated"
        }else if(!available && favoriteOfficeElement.type == 2){
            let room = await OfficeElementRepository.findOneById(favoriteOfficeElement.parentId)
            let {available, used} = await OfficeElementService.verifyRoomOccupancy(room.id, req.body.day);
            if(available){
                let desks = await OfficeElementRepository.findAllByParentId(room.id)
                let bookedDesk = 0;
                for(let i = 0; i < desks.length; i++){
                    let {deskAvailable, deskUsed} = await OfficeElementService.verifyRoomOccupancy(desks[i].id, req.body.day)
                    if(deskAvailable) bookedDesk = desks[i].id;
                }
                await OfficeBooking.create({day: req.body.day, morning: true, afternoon: true, officeElementId: bookedDesk, userId: res.locals.auth.user.id})
                response.status = "other_seat"
            } else {
                response.status = "warning"
            }
        } else {
            response.status = "warning"
        }
    }
    if(officeBookingMandatory && favoriteDeskId > 0){
        let favoriteOfficeElement = await OfficeElementRepository.findOneById(favoriteDeskId);
        let {available, used} = await OfficeElementService.verifyRoomOccupancy(favoriteDeskId, req.body.day);
        if(available){
            await OfficeBooking.create({day: req.body.day, morning: true, afternoon: true, officeElementId: favoriteDeskId, userId: res.locals.auth.user.id})
            response.status = "validated"
        } else if(favoriteOfficeElement.type == 2){
            let room = await OfficeElementRepository.findOneById(favoriteOfficeElement.parentId)
            let {available, used} = await OfficeElementService.verifyRoomOccupancy(room.id, req.body.day);
            if(available){
                let desks = await OfficeElementRepository.findAllByParentId(room.id)
                let bookedDesk = 0;
                for(let i = 0; i < desks.length; i++){
                    let {deskAvailable, deskUsed} = await OfficeElementService.verifyRoomOccupancy(desks[i].id, req.body.day)
                    if(deskAvailable) bookedDesk = desks[i].id;
                }
                await OfficeBooking.create({day: req.body.day, morning: true, afternoon: true, officeElementId: bookedDesk, userId: res.locals.auth.user.id})
                response.status = "other_seat"
            } else {
                response.status = "error"
            }
        } else {
            response.status = "error"
        }
    }
    if(officeBookingMandatory && favoriteDeskId == 0){
        response.status = "declare_favorite_seat"
    }
    res.json(response);
    return
}

exports.getOfficeBooking = async function(req, res, next) {
    await OfficeBookingRepository.findOneByDayAndUserId(req.params.day, res.locals.auth.user.id)
        .then(async (record)=> {
            if(!record){
                res.json([]);
            }else{
                let resa = [];
                let officeElementId = record.officeElementId;
                while(officeElementId !== null) {
                    const element = await OfficeElementRepository.findOneById(officeElementId);
                    if(element) {
                        officeElementId = element.parentId;
                        if(resa.length === 0) {
                            resa.push({id: element.id, name: element.name, color:element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity});
                        }else {
                            resa.unshift({id: element.id, name: element.name, color:element.color, type: element.type, capacity: element.capacity, maxCapacity: element.maxCapacity});
                        }
                        if(element.parentId === null){
                            const parent = await OfficeRepository.findOneById(element.officeId);
                            if(parent){
                                resa.unshift({id: parent.id, name: parent.name, capacity: parent.capacity, maxCapacity: parent.maxCapacity});
                            }
                        }
                    }
                }
                res.json(resa);
            }
        })
}

exports.validate = (method) => {
    switch (method) {
        case 'getBookingsForOffice': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'getBookingsForOfficeElement':{
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'getOfficeBooking': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'removeOfficeBooking': {
            return [
                param('day', 'day doesn\'t exist').exists(),
                param('day', 'day is not a number').isString()
            ]
        }
        case 'setOfficeBooking':{
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('morning', 'morning doesn\'t exist').exists(),
                body('morning', 'morning is not a number').isBoolean(),
                body('afternoon', 'afternoon doesn\'t exist').exists(),
                body('afternoon', 'afternoon is not a number').isBoolean(),
                body('officeElementId', 'officeElementId doesn\'t exist').exists(),
                body('officeElementId', 'officeElementId is not a number').isNumeric()
            ]
        }
        case 'setAutomaticBooking':{
            return [
                body('day', 'day doesn\'t exist').exists(),
                body('day', 'day is not a number').isString(),
                body('officeElementId', 'officeElementId doesn\'t exist').exists(),
                body('officeElementId', 'officeElementId is not a number').isNumeric(),
                body('officeBookingMandatory', 'officeBookingMandatory doesn\'t exist').exists(),
                body('officeBookingMandatory', 'officeBookingMandatory is not a number').isBoolean()
            ]
        }
    }
}