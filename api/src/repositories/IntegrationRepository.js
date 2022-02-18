const Integration = require('../models/Integration');

module.exports = IntegrationRepository = {
    async findOneById(id){
        if(id) return await Integration.findOne({where:{id:id}});
        return undefined;
    },

    async findAllForCompany(id, order = [["createdAt", "DESC"]]){
        if(id) return await Integration.findAll({where:{companyId: id}, order:order});
        return [];
    },

    async findOneByNameForCompany(name, id){
        if(name && id) return await Integration.findOne({where: {name:name, companyId:id}});
        return undefined;
    }
}