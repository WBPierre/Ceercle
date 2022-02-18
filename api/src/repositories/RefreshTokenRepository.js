const RefreshToken = require('../models/RefreshToken');

module.exports = RefreshTokenRepository = {
    async findOneByToken(token){
        if(token) return await RefreshToken.findOne({where: { token : token}})
        return undefined;
    },

    async deleteById(id){
        if(id) return await RefreshToken.destroy({where: { id : id}})
        return undefined;
    }
}