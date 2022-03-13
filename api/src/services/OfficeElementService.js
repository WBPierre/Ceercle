const OfficeElement = require('../models/OfficeElement');
const OfficeBooking = require('../models/OfficeBooking');


exports.verifyRoomOccupancy = async (id, day) => {
    const room = await OfficeElement.findOne({
        where: {
            id: id
        }
    });
    const hasDesks = await OfficeElement.findAll({
        where: {
            parentId : id
        }
    });
    let maxPlace = Math.abs(room.capacity*room.maxCapacity/100);
    let used = 0;
    if(hasDesks.length !== 0){
        for(let i = 0; i < hasDesks.length; i++){
            const booked = await OfficeBooking.findOne({
                where:{
                    officeElementId: hasDesks[i].id,
                    day: day
                }
            })
            if(booked){
                used +=1;
            }
        }
        if(maxPlace > used){
            return {available: true, used}; // IS THIS NORMAL?
        }else{
            return {available: false, used};
        }
    }else{
        const booked = await OfficeBooking.count({
            where:{
                officeElementId: room.id,
                day: day
            }
        })
        if(maxPlace > booked){
            return {available: true, used: booked};
        }else{
            return {available: false, used: booked};
        }
    }
}