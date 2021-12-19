const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const User = require("./User");

const TimeSheet = db.define('time_sheet', {
    // Model attributes are defined here
    day: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    morning: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    afternoon: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    freezeTableName: true
});

User.hasMany(TimeSheet);
TimeSheet.belongsTo(User);

module.exports = TimeSheet;