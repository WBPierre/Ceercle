const OfficeBooking = require('../models/OfficeBooking');

module.exports = OfficeBookingRepository = {
    async findOneByDayAndUserId(day, userId){
        if(day && userId) return await OfficeBooking.findOne({where:{day:day, userId: userId}});
        return undefined;
    }
}