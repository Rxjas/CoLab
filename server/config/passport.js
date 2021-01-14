const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;

const { User } = require('./../models');

// authenticate user using username and password
passport.use(new LocalStrategy(User.authenticate()));

// serialize cookie request header to keep user logged in throughout session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
