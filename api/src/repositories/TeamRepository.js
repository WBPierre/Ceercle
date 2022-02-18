const Team = require('../models/Team');

module.exports = TeamRepository = {
    async findOneById(id){
        if(id) return await Team.findOne({where:{id:id}});
        return undefined;
    },

    async findAllForCompany(id, order = [["createdAt", "DESC"]]){
        if(id) return await Team.findAll({where:{companyId: id}, order:order});
        return [];
    },

    async deleteTeamById(id){
        if(id) return await Team.destroy({where: {id:id}});
        return undefined;
    }
}