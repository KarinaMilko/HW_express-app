const { v4: uuidv4 } = require("uuid");

const tasks = [
  {
    id: uuidv4(),
    title: "Task 1",
    isDone: false,
  },
  {
    id: "74bb5871-e773-4479-a982-8777dd69083c",
    title: "Task 2",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "Task 3",
    isDone: false,
  },
];

module.exports.createTask = (req, res) => {
  const { body } = req;
  tasks.push({ ...body, id: uuidv4() });
  res.status(201).send(tasks[tasks.length - 1]);
};

module.exports.getTask = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const foundTask = tasks.find((t) => t.id === id);
  if (!foundTask) {
    return res.status(404).send("Task Not Found");
  }
  res.status(200).send(foundTask);
};

module.exports.updateTaskById = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const foundTaskIndex = tasks.findIndex((t) => t.id === id);
  if (foundTaskIndex === -1) {
    return res.status(404).send("Task Not Found");
  }
  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body };
  res.status(200).send(tasks[foundTaskIndex]);
};

module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params;
  const foundTaskIndex = tasks.findIndex((t) => t.id === id);
  if (foundTaskIndex === -1) {
    return res.status(404).send("Task Not Found");
  }
  tasks.splice(foundTaskIndex, 1);
  res.status(204).end();
};
