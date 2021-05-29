const express = require("express");
const app = express();
const db = require("./config/db");
const todoController = require("./controllers/todoController");
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

app.post("/todos", todoController.addTodo);
app.get("/todos", todoController.findAll);
app.get("/todos/:id", todoController.findById);
app.put("/todos/:id", todoController.update);
app.delete("/todos/:id", todoController.delete);

db.sync()
  .then((result) => {
    // console.log(result);
    console.log("Database synced...");
  })
  .catch((error) => console.error(error.message));

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
