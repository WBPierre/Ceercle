const Office = require('../models/Office');

module.exports = OfficeRepository = {
    async findOneById(id){
        if(id) return await Office.findOne({where:{id:id}});
        return undefined;
    },

    async findAllForCompany(id, order = [["createdAt", "DESC"]]){
        if(id) return await Office.findAll({where:{companyId:id}, order:order});
        return [];
    },

    async deleteById(id){
        if(id) return await Office.destroy({where:{id:id}});
        return undefined;
    }
}