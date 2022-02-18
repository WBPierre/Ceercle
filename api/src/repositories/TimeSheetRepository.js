const TimeSheet = require('../models/TimeSheet');
const {Op} = require("sequelize");

module.exports = TimeSheetRepository = {
    async findOneByDayAndUserId(day, userId){
        if(day && userId) return await TimeSheet.findOne({where:{day:day, userId: userId}});
        return undefined;
    },

    async findAllByUserIdBetweenDates(userId, start, end, order=[["day","ASC"]]){
        if(userId && start && end) return await TimeSheet.findAll({
            where: {
                day: {
                    [Op.between]: [start, end]
                },
                userId: userId
            },
            order:order
        })
        return [];
    }
}