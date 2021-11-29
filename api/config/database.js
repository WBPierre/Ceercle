import {Sequelize} from "sequelize";

const sequelize = new Sequelize('postgres://admin:root@0.0.0.0:5432/spacecorner',
    {
        logging: console.log,
        define: {
            freezeTableName: true
        }
    })

try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");


export default sequelize;