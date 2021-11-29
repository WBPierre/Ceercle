import DataTypes from "sequelize";
import sequelize from "./../../config/database.js";

const User = sequelize.define('users', {
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