const { DataTypes } = require('sequelize');
const { db } = require("./../../config/database");

const UserIntegration = db.define('user_integration', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accessToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expirationTime: {
        type: DataTypes.STRING,
        allowNull: true
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = UserIntegration;