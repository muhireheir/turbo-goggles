import joi from 'joi';

const newUserSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
});

const existinguserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
});

export default { newUserSchema, existinguserSchema };
