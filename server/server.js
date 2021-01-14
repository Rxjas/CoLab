const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const logger = require("morgan");
require('./config/db')();
require('dotenv').config();
var passport = require('passport');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(routes);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
// }

app.use(passport.initialize()); // after (express.static)
// require("./config/passport");

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
