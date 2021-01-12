const router = require('express').Router();
const user = require('./user.routes.js');
const pb = require('./pb.routes.js');

var passport = require('passport');

/* GET Google Authentication API. */
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("https://afternoon-eyrie-78094.herokuapp.com/?token=" + token);
    }
);

//api/user
router.use('/api/user', user);

// /api/todo
router.use('/api/todo', todos);
router.use('/api/pubnub', pb);

module.exports = router;