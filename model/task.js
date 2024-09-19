const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

const tasks = [
  {
    id: uuidv4(),
    title: "Task 1",
    deadline: format(new Date(), "Y-MM-dd"),
    isDone: false,
  },
  {
    id: "74bb5871-e773-4479-a982-8777dd69083c",
    title: "Task 2",
    deadline: "2024-11-18",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "Task 3",
    deadline: format(new Date(), "Y-MM-dd"),
    isDone: false,
  },
];

class TasksDB {
  constructor(arr) {
    this.tasks = [...arr];
  }
  createTask(body) {
    this.tasks.push({ ...body, id: uuidv4() });
    return this.tasks[this.tasks.length - 1];
  }

  getTask() {
    return this.tasks;
  }

  getTaskById(id) {
    const foundTask = this.tasks.findIndex((t) => t.id === id);
    return foundTask === -1 ? null : this.tasks[foundTask];
  }

  updateTaskById(id, values) {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
    }
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTaskById(id) {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === id);
    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstance = new TasksDB(tasks);
module.exports = tasksDbInstance;
