const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const User = require('./User');

const Company = db.define('company', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    freezeTableName: true
});
Company.hasMany(User)
User.belongsTo(Company);

module.exports = Company;