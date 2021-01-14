const router = require('express').Router();
const { User } = require("./../models");
const passport = require("../config/passport");
// const { response } = require('express');

router.post('/signup', function (req, res) {

    Users = new User({ username: req.body.username });

    // create new user
    User.register(Users, req.body.password, function (err, user) {
        if (err) {
            console.log(err)
            res.json({
                success: false, message: "Your account could not be saved. Error: ", err
            })
        }
        // authenticate new user
        passport.authenticate('local')(req, res, function () {
            res.sendStatus(200)
        })


    });

});

// authenticate user on login, creating cookie header
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.sendStatus(200)
})


router.get('/allow',checkAuthentication,function(req,res){
    //do something only if user is authenticated, future development for issue# 40
    res.json({allowed: "allow"})
});
function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        res.json({allowed: "nope"})
    }
}

module.exports = router;