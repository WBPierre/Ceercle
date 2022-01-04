const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const User = require('./User');
const Team = require('./Team');

const Company = db.define('company', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activeOfficeHandler:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    remoteMinimum: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    remoteMaximum: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
    },
    maxCapacity: {
        type: DataTypes.INTEGER,
        defaultValue: 100
    },
    mondayMandatoryStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    tuesdayMandatoryStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    wednesdayMandatoryStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    thursdayMandatoryStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    fridayMandatoryStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }

}, {
    timestamps: true,
    freezeTableName: true
});
Company.hasMany(User);
User.belongsTo(Company);
Company.hasMany(Team);
Team.belongsTo(Company);

module.exports = Company;