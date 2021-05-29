const Sequelize = require("sequelize");
const db = require("../config/db");

const Todo = db.define("todo", {
  //   todo_id: {
  //     type: Sequelize.DataTypes.INTEGER,
  //     primaryKey: true,
  //     allowNull: false,
  //     autoIncrement: true,
  //   },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Todo;
