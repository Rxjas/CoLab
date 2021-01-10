const router = require('express').Router();
const todos = require('./todo.routes');
const pb = require('./pb.routes');

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
        res.redirect("http://localhost:3000?token=" + token);
    }
);

// /api/todo
router.use('/api/todo', todos);
router.use('/api/pubnub', pb);

module.exports = router;