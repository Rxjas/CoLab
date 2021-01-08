const router = require('express').Router();
const { User } = require('../models');

//Restful API Time Full Routes are commented above routers.
//api/user/
router.route('/')
    .get((req, res) => {
        User.find({})
        .then(data => {
            res.json({ success: true, data})
        })
        .catch(err => {
            console.log(err)
            res.json({ success: false });
        });
    });

//export the module
module.exports = router;
