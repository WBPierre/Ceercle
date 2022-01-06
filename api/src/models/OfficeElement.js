const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");

const OfficeElement = db.define('office_element', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING
    },
    capacity: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: true,
    freezeTableName: true
});

OfficeElement.hasMany(OfficeElement, {
    foreignKey:{
        name: 'parentId'
    }
});

module.exports = OfficeElement;