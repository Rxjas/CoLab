const router = require('express').Router();
const todos = require('./todo.routes');
const pb = require('./pb.routes');
const img = require('./image.routes');
const user = require('./user.routes.js');

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
        res.redirect("https://afternoon-eyrie-78094.herokuapp.com/profile/?token=" + token);
    }
);

//api/user
router.use('/api/user', user);

// /api/todo
router.use('/api/todo', todos);
router.use('/api/pubnub', pb);
router.use('/api/image', img);

module.exports = router;