const { DataTypes } = require('sequelize');
const { db } = require("./../../config/database");

const Integration = db.define('integration', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = Integration;