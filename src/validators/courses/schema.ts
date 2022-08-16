import joi from 'joi';

const courseSchema = joi.object({
  name: joi.string().required(),
  classId: joi.number().required(),
  tutorId: joi.number().required(),
  description: joi.string().required(),
  content: joi.string().required(),
  thumbnail: joi.string().required(),
  attachment: joi.string().required(),
});
export default { courseSchema };
