const { DataTypes } = require('sequelize');
const { db } = require("./../../config/database");
const User = require('./User');
const Team = require('./Team');
const Office = require('./Office');
const Integration = require('./Integration');

const Company = db.define('company', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activeOfficeHandler: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    officeBookingMandatory: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    ruleScope: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    officeMinimum: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    officeMaximum: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
    },
    remoteMinimum: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    remoteMaximum: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
    },
    maxCapacity: {
        type: DataTypes.INTEGER,
        defaultValue: 100
    },
    mondayMandatoryStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    tuesdayMandatoryStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    wednesdayMandatoryStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    thursdayMandatoryStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    fridayMandatoryStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    activation_day: {
        type: DataTypes.STRING,
        allowNull: true
    },
    activation_hour: {
        type: DataTypes.INTEGER,
        defaultValue: 8
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    invoice_type:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: true,
    freezeTableName: true
});
Company.hasMany(User);
User.belongsTo(Company);

Company.hasMany(Team);
Team.belongsTo(Company);

Company.hasMany(Office);
Office.belongsTo(Company);

Company.hasMany(Integration);
Integration.belongsTo(Company);

module.exports = Company;