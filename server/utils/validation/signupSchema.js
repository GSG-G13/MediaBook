const Joi = require("joi");

const signupSchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  surname: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid("male", "female"),
  date: Joi.date().required(),
});

module.exports = signupSchema;
