const { DataTypes } = require("sequelize");
const { db } = require("./../../config/database");
const User = require("./User");
const Company = require("./Company");

const Team = db.define(
  "team",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ruleScope: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    officeMaximum: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
    remoteMaximum: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
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
    hasSpecificRules: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);
Team.belongsToMany(User, { through: "UserTeams" });
User.belongsToMany(Team, { through: "UserTeams" });

module.exports = Team;
