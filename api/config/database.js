import {Sequelize} from "sequelize";

const db = new Sequelize('postgres://admin:root@postgres:5432/spacecorner',
    {
        logging: console.log,
        define: {
            freezeTableName: true
        }
    })

try {
    await db.authenticate();
    console.log('Connection to the database has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

await db.sync({ force: true });
console.log("All models were synchronized successfully.");


export default db;