const { join } = require('path');

const clientError = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'client404.html'));
};
const serverError = (err, req, res, next) => {
  console.log(err, 'server error');
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'server500.html'));
};


module.exports = { clientError, serverError };