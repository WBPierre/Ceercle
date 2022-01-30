const { DataTypes } = require('sequelize');
const { db } = require("./../../config/database");
const OfficeBooking = require("./OfficeBooking");

const OfficeElement = db.define('office_element', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING
    },
    capacity: {
        type: DataTypes.INTEGER
    },
    maxCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100
    },
}, {
    timestamps: true,
    freezeTableName: true
});

OfficeElement.hasMany(OfficeElement, {
    foreignKey: {
        name: 'parentId'
    }
});

OfficeElement.hasMany(OfficeBooking);
OfficeBooking.belongsTo(OfficeElement);

module.exports = OfficeElement;