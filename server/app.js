require("dotenv").config();
const parser = require("cookie-parser");
const express = require("express");
const path = require("path");
const router = require("./routes/index");
const app = express();
const { clientError, serverError } = require('./controllers/errors/errors')

app.use(express.json());
app.use(parser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(router);


module.exports = app;
