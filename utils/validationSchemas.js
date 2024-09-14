const yup = require("yup");

const TITLE_VALIDATION_SCHEMA = yup.string().trim().min(2).max(100);

const DEADLINE_VALIDATION_SCHEMA = yup.date().min(new Date());

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA.required(),
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: yup.boolean(),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA,
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: yup.boolean(),
});
