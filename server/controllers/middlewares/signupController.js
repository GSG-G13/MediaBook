const { signupSchema } = require("../../utils");

const signupContoller = (req, res) => {
  const { firstname, surname, email, password, gender, date } = req.body;
  const { error, value } = signupSchema.validate(
    { firstname, surname, email, password, gender, date },
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
    return;
  } else {
    res.status(200).json({
      error: false,
      data: {
        user: value,
      },
    });
  }
};

module.exports = signupContoller;
