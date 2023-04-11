const Joi = require("jsonwebtoken");
const signupSchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid("male", "female"),
});

module.exports = signupSchema;
