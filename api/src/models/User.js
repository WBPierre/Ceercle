const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const Mood = require('./Mood');

const User = db.define('user', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    defaultWorkingMorningHour: {
        type: DataTypes.INTEGER,
        defaultValue: 9
    },
    defaultWorkingMorningMinutes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    defaultWorkingAfternoonHour: {
        type: DataTypes.INTEGER,
        defaultValue: 5
    },
    defaultWorkingAfternoonMinutes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    timezone: {
        type: DataTypes.STRING,
        defaultValue: 'Europe/Paris'
    },
    lang: {
        type: DataTypes.STRING,
        defaultValue: 'Français'
    },
    mondayStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    tuesdayStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    wednesdayStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    thursdayStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    fridayStatus:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profilePicturePath: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bannerPath:{
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    freezeTableName: true
});

User.hasMany(Mood);
Mood.belongsTo(User);

module.exports = User;