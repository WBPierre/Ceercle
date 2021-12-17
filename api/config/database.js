const {Sequelize} = require('sequelize');
const {initDatabase} = require("./init/database");

const db = new Sequelize('postgres://admin:root@localhost:5432/spacecorner',
    {
        logging: false,
        define: {
            freezeTableName: true
        }
    })


async function verifyDatabase(){
    try {
        await db.authenticate();
        console.log('Connection to the database has been established successfully.');
        console.log('Database synchronizing...');
        await db.sync({ alter: true });
        console.log('Database synchronized');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {db, verifyDatabase};