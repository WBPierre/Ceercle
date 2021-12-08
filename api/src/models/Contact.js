import DataTypes from "sequelize";
import db from "./../../config/database.js";

const Contact = db.define('contact', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fonction: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    freezeTableName: true
});

await Contact.sync({ force: true });

export default Contact;