const router = require('express').Router();
const { User, Image } = require("./../models");
const passport = require("../config/passport");

router.post('/signup', function (req, res) {

  Users = new User({ username: req.body.username, email: req.body.email });

  // create new user
  User.register(Users, req.body.password, function (err, user) {
    if (err) {
      console.log(err)
      res.json({
        success: false, error: err
      })
    }
    // authenticate new user
    passport.authenticate('local')(req, res, function () {
      // add entry to Image collection
      Image
        .create({ username: req.body.username })
        .catch(err => console.log(err));
      res.json({
        success: true
      })
    })
  });
});

// authenticate user on login, creating cookie in header
router.post('/login', passport.authenticate('local'), function (req, res) {
  res.sendStatus(200)
})

router.post('/allow', checkAuthentication, function (req, res) {
  //do something only if user is authenticated, future development for issue# 40
  const usernameSent = req.session.passport.user;
  res.json({
    allowed: "allow",
    userLoggedIn: usernameSent
  })
});

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    res.json({ allowed: "nope" })
  }
}

module.exports = router;