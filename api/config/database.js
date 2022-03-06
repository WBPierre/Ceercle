const { Sequelize } = require("sequelize");

const db = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_ADDRESS}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    logging: false,
    define: {
      freezeTableName: true,
    },
  }
);

async function verifyDatabase() {
  try {
    await db.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    console.log("Database synchronizing...");
    await db.sync({ force: true });
    console.log("Database synchronized");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { db, verifyDatabase };
