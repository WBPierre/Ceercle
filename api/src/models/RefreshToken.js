const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const config = require('../../config/auth.config');
const User = require('./User');
const {v4: uuidv4} = require('uuid');

const RefreshToken = db.define('refresh_token', {
    // Model attributes are defined here
    token: {
        type: DataTypes.STRING
    },
    expiryDate: {
        type: DataTypes.DATE
    }
}, {
    timestamps: true,
    freezeTableName: true
});

RefreshToken.createToken = async function (id) {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds()+config.jwtRefreshExpiration);
    let _token = uuidv4();
    let refreshToken = await this.create({
        token: _token,
        userId: id,
        expiryDate: expiredAt.getTime()
    })
    return refreshToken.token;
}

RefreshToken.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
}

User.hasOne(RefreshToken);
RefreshToken.belongsTo(User);

module.exports = RefreshToken;