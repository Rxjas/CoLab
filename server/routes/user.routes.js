const router = require('express').Router();
const { request } = require('express');
const { User } = require('../models');

//Restful API Time Full Routes are commented above routers.
//api/user/
router.route('/')
    //  get users
    .get((req, res) => {
        User.find({})
            .then(data => {
                res.json({ success: true, data })
            })
            .catch(err => {
                console.log(err)
                res.json({ success: false });
            });
    })
    // add user
    .post((req, res) => {
        User.create(req.body)
            .then(newUser => {
                console.log(newUser);
                res.json({ success: true })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false });
            })
    });


// api/user/:id   This path is used so you can search by username not the object ID
router.route('/:id')
    //get specific user
    .get((req, res) => {
        User.find({username: req.params.id})

            .then((data) => {
                console.log(data)
                res.json({ success: true, data })
            })

            .catch( err => {
                console.log(err)
                res.json( { success: false } )
            })
    })

    //update specific user via username
    .put((req, res) => {
        User.findOneAndUpdate({username: req.params.id}, req.body)
            .then((data) => {
                res.json( { success: true } )
            })
            .catch(err => {
                console.log(err);
                res.json( {success: false} )
            })        
    })

    //delete a user via the username
    .delete((req, res) => {
        User.deleteOne({username: req.params.id})
            .then((data) => {
                res.json({user: "Deleted"})
            })
            .catch(err => {
                console.log(err);
                res.json( {success: false} )
            })

    });

//route to look a matched users
// /api/user/matches/:id   full route to call for 
router.route('/matches/:id')
    
    // get request to get matches for a specific user
    .get((req, res) => {
        User.find({username: req.params.id})
            .then( data => {
                console.log(data)
            })
            .catch( err => {
                console.log(err);
                res.json( {success: false} )
            })
    })
    // put request to add matches to array

    .put((req, res) => {
        User.findOneAndUpdate({username: req.params.id}, {$push: {matches: req.body.matches} } )
        .then( data => {
            console.log(data)
            res.json({success: true})

        })
        .catch(err => {
            console.log(err);
            res.json({success: false})
        })
    })
//export the module
module.exports = router;
