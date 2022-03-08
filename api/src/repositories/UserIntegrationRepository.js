const UserIntegration = require('../models/UserIntegration');

module.exports = UserIntegrationRepository = {
    async findOneById(id){
        if(id) return await UserIntegration.findOne({where:{id:id}});
        return undefined;
    },

    async findAllForUser(id, order = [["createdAt", "DESC"]]){
        if(id) return await UserIntegration.findAll({where:{userId: id}, order:order});
        return [];
    },

    async findOneByNameForUser(name, id){
        if(name && id) return await UserIntegration.findOne({where: {name:name, userId:id}});
        return undefined;
    }
}