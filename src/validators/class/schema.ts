import joi from 'joi';

const newClassSchema = joi.object({
  name: joi.string().required(),
});
export default { newClassSchema };
