const { Sequelize } = require("sequelize");

const db = new Sequelize("perntodo", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

module.exports = db;
