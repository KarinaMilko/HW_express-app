const express = require("express");
const {
  createTask,
  getTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("./controllers/tasksController");

const app = express();
app.use(express.json());

app.post("/tasks", createTask);
app.get("/tasks", getTask);
app.get("/tasks/:id", getTaskById);
app.patch("/tasks/:id", updateTaskById);
app.delete("/tasks/:id", deleteTaskById);

module.exports = app;
