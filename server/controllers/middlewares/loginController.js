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
          return data
        }
        else {
          res.status(401).json({ message: "Please Create Account First!" })
          throw new Error('no email found');
        }
      })
      .then(data => {
        const isMatch  = bcrypt.compare(password, data.rows[0].passwords)
        if (isMatch) {
          jwt.sign({ login: true , user_id: data.rows[0].id }, process.env.SECRET_KEY,(err, token)=> {
            res.cookie("access_token", token).json({ message: "Success" });
          });
          return;
        } else if (!isMatch) {
          res.status(401).json({ message: "Wrong Password!" });
        }
      })
      .catch(err => {
        if (err.message !== 'no email found') {
          res.status(500).json({ msg: 'internal server error' })
        }
      });
  }
}
module.exports = addLoginController;

