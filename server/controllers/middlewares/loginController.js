const { loginSchema } = require("../../utils");

const addLoginController = (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginSchema.validate(
    { email, password },
    {
      abortEarly: false,
    }
  );

  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details,
      },
    });
  }
};

module.exports = addLoginController;
