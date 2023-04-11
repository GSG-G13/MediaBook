const express = require('express');
const addLoginController = require('../controllers/middlewares/loginController');
const router = express.Router();

router.post('/login', addLoginController);


module.exports = router;