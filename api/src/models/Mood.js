const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");

const Mood = db.define('mood', {
    // Model attributes are defined here
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    day: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
}, {
    timestamps: true,
    freezeTableName: true
});



module.exports = Mood;