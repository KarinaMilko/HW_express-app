const {
  CREATE_TASK_VALIDATION_SCHEMA,
  UPDATE_TASK_VALIDATION_SCHEMA,
} = require("./../utils/validationSchemas");
module.exports.validateTaskOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await CREATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (err) {
    res.status(422).send(err.errors);
    // next(err);
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validateTask;
    next();
  } catch (err) {
    res.status(422).send(err.errors);
    // next(err);
  }
};
