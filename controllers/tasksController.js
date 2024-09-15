const createError = require("http-errors");
const { task } = require("./../model");

module.exports.createTask = (req, res) => {
  const { body } = req;
  const createdTask = task.createTask(body);
  res.status(201).send(createdTask);
};

module.exports.getTask = (req, res) => {
  res.status(200).send(task);
};

module.exports.getTaskById = (req, res, next) => {
  const { id } = req.params;

  const foundTask = task.getTaskById(id);
  if (!foundTask) {
    return next(createError(404, "Task Not Found"));
  }
  res.status(200).send(foundTask);
};

module.exports.updateTaskById = (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  const updatedTask = task.updateTaskById(id, body);
  if (!updatedTask) {
    return next(createError(404, "Task Not Found"));
  }
  res.status(200).send(updatedTask);
};

module.exports.deleteTaskById = (req, res, next) => {
  const { id } = req.params;
  const deletedTask = task.deleteTaskById(id);
  if (!deletedTask) {
    return next(createError(404, "Task Not Found"));
  }
  res.status(204).end();
};
