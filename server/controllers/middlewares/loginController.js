const { loginSchema } = require("../../utils");
const loginQuery = require("../../database/queries/loginQuery");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const addLoginController = (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginSchema.validate(
    { email, password },
    {
      abortEarly: false,
    }
  );

  if (error) {
    console.log(error + "errrror");
    res.status(400).json({
      error: true,
      data: {
        errors: error.details,
      },
    });
  } else {
    loginQuery(email)
      .then((data) => {
        if (data.rowCount) {
          return bcrypt.compare(password, data.rows[0].passwords)
        }
        else {
          res.status(401).json({ message: "Please Create Account First!" })
        }
      }).then(isMatched => {
        if (isMatched) {
          jwt.sign({ login: true }, process.env.PASSWORD_TOKEN, function (err, token) {
            res.cookie("access_token", token).json({ message: "Success" });
          });
          //sign
        } else {
          res.status(401).json({ message: "Wrong Password!" });

        }
      });
  }
}
module.exports = addLoginController;

