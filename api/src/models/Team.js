const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const User = require('./User');
const Company = require('./Company');

const Team = db.define('team', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
    remoteMinimum: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    remoteMaximum: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
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

Team.hasMany(User);
User.belongsTo(Team);

module.exports = Team;