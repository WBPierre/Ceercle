const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const User = require('./User');

const OfficeBooking = db.define('office_booking', {
    // Model attributes are defined here
    day: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    morning:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    afternoon:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: true,
    freezeTableName: true
});

User.hasMany(OfficeBooking);
OfficeBooking.belongsTo(User);



module.exports = OfficeBooking;