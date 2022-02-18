const User = require('../models/User');

module.exports = UserRepository = {
    async findAll(){
        return await User.findAll();
    },

    async findAllActive(order = [["createdAt", "DESC"]]){
        return await User.findAll({where:{active: true}, order:order});
    },

    async findAllActiveForCompany(id, order = [["createdAt", "DESC"]]){
        if (id) return await User.findAll({where: {companyId: id, active: true, isDeleted: false}, order:order});
        return [];
    },

    async findAllForCompany(id, order = [["createdAt", "DESC"]]){
        if (id) return await User.findAll({where: {companyId: id}, order:order});
        return [];
    },

    async findOneById(id) {
        if (id) return await User.findOne({where: {id: id}});
        return undefined;
    },

    async findOneByEmailForCompany(email, id){
        if (id && email) return await User.findOne({where: {email: email, companyId: id}});
        return undefined;
    },

    async findOneByEmail(email){
        if(email) return await User.findOne({where: {email: email}});
        return undefined;
    },

    async findOneByToken(token){
        if (token) return await User.findOne({where: {activation_token: token}});
        return undefined;
    }
}