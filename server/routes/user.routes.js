const router = require('express').Router();
const { User } = require('../models');

//Restful API Time Full Routes are commented above routers.
//api/user/
router.route('/')
    //  get users
    .get((req, res) => {
         User.find({})
            .then(data => {
                res.json({ success: true, data})
            })
            .catch(err => {
                console.log(err)
                res.json({ success: false });
            });
        })
    // add user
    .post((req, res) => {
        console.log({ reqBody: req.body });
        User.create({
            created: new Date(),
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            pronouns: req.body.pronouns,
            email: req.body.email,
            password: req.body.password,
            roles: req.body.roles,
            age: req.body.age,
            bio: req.body.bio,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
            facebook: req.body.facebook,
            soundcloud: req.body.soundcloud,
            spotify: req.body.spotify,
            bandcamp: req.body.bandcamp,
            youtube: req.body.youtube,
            audiomack: req.body.audiomack,
            lookingfor: req.body.lookingfor
        })
            .then(newUser => {
                console.log(newUser);
                res.json({success:true})
            })
            .catch((err) => {
                console.log(err);
                res.json({success: false});
            })
    })

//export the module
module.exports = router;
