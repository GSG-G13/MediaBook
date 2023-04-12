const { signupQuery } = require("../../database");
const { signupSchema } = require("../../utils");
const bcrypt = require('bcrypt');

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
    const{ firstname, surname, email, gender, date } = value;
    try{bcrypt.hash(password, 10)
      .then(data => {
        {signupQuery({ firstname, surname, email, gender, date ,password:data})
        .then(data => {
          res.status(200).json({
            massage: 'create account successfully',
            data: data.rows[0],
          })
        })
        .catch(err => {
          res.status(401).json({
            error: true,
            massage: err.details
          })
        })}
      })
      .catch(err => res.status(500).json({
            error: true,
            massage : err
          })
          )
        }catch(error){
          console.log(error);
  }

  }
};

module.exports = signupContoller;
