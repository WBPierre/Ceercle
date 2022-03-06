const OfficeElement = require('../models/OfficeElement');
const {Op} = require("sequelize");

module.exports = OfficeElementRepository = {
    async findOneById(id){
        if(id) return await OfficeElement.findOne({where:{id:id}});
        return undefined;
    },

    async findAllByOfficeIdAndParentId(officeId, parentId = null, order = [["createdAt", "DESC"]]){
        if(officeId) return await OfficeElement.findAll({where:{officeId:officeId, parentId: {[Op.eq]: parentId}}, order:order});
        return [];
    },

    async findAllByParentId(parentId, order = [["createdAt", "DESC"]]){
        if(parentId) return await OfficeElement.findAll({where:{parentId: parentId}, order:order});
        return [];
    },

    async findAllByOfficeId(officeId, order = [["createdAt", "DESC"]]){
        if(officeId) return await OfficeElement.findAll({where:{officeId:officeId}, order:order});
        return [];
    },

    async deleteById(id){
        if(id) return await OfficeElement.destroy({where:{id:id}});
        return undefined;
    }
}