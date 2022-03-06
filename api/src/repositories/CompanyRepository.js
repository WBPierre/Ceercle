const Company = require('../models/Company');
const {Op} = require("sequelize");

module.exports = CompanyRepository = {
    async findAll(){
        return await Company.findAll();
    },

    async findAllActive(){
        return await Company.findAll({where:{active: true}});
    },

    async findOneById(id) {
        if (id) return await Company.findOne({where: {id: id}});
        return undefined;
    },

    async findAllClients() {
        return await Company.findAll({ where:{admin:false}, order: [['createdAt', 'DESC']] });
    }
}