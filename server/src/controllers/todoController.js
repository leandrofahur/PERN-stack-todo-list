const Todo = require("../models/Todo");

exports.addTodo = async (req, res) => {
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
};

exports.findAll = async (req, res) => {
  try {
    const { description } = req.body;

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
};

exports.findById = async (req, res) => {
  try {
    // const id = req.params.id;
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(500).json({
        status: 500,
        error: todo,
      });
    }

    res.status(200).json({
      status: 200,
      message: todo,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(500).json({
        status: 500,
        error: todo,
      });
    }

    const { description } = req.body;
    console.log(req.body);
    await todo.update({ description });
    res.status(200).json({
      status: 200,
      message: todo,
    });
  } catch (error) {
    console.error(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(500).json({
        status: 500,
        error: todo,
      });
    }

    await todo.destroy();
    res.status(200).json({
      status: 200,
      message: todo,
    });
  } catch (error) {
    console.error(error.message);
  }
};
