import DataTypes from "sequelize";
import db from "./../../config/database.js";

const User = db.define('users', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    timestamps: true,
    freezeTableName: true
});

await User.sync({ force: true });

export default User;