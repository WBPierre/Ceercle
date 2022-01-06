const {DataTypes} = require('sequelize');
const {db} =  require("./../../config/database");
const OfficeElement = require("./OfficeElement");

const Office = db.define('office', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100
    },
    address: {
        type: DataTypes.STRING
    },
    zipCode: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING,
        defaultValue: 'FRANCE'
    }
}, {
    timestamps: true,
    freezeTableName: true
});

Office.hasMany(OfficeElement);
OfficeElement.belongsTo(Office);

module.exports = Office;