const Mood = require('../models/Mood');

module.exports = MoodRepository = {
    async findOneByDayAndUserId(day, userId){
        if(day && userId) return await Mood.findOne({where:{day:day, userId: userId}});
        return undefined;
    }
}