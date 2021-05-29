const express = require("express");
const app = express();
const db = require("./config/db");
const Todo = require("./models/Todo");
const cors = require("cors");

// db connection:
db.authenticate()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((error) => console.error(error));

// middlewares:
app.use(cors());
app.use(express.json({ extended: false }));

// ROUTES

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await Todo.create({
      description,
    });

    res.json({
      status: 200,
      message: newTodo,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: 500,
      error: "Server error!",
    });
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.findAll();

    res.json({
      status: 200,
      message: todos,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: 500,
      error: "Server error!",
    });
  }
});

// get a todo by id

// update a todo

// delete a todo

db.sync()
  .then((result) => {
    // console.log(result);
    console.log("Database synced");
  })
  .catch((error) => console.error(error.message));

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
