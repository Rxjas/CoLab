const router = require('express').Router();
const { User } = require('../models');
var imgModel = require('./../models/image');


router
.route('/help')
.get((req, res) => {

    const filter = { username: "shanna" }
    const update = {
        $push: {
            chats: {
                user: "email5",
                channelID: "chats.shannaemail5"
            }
        }
    }
    User
        .findOneAndUpdate(filter, update)
        .then(data => {
            res.send(data)
        }).catch(err => console.log(err))
})



router
    .route('/:username')
    .get((req, res) => {
        const newchannelId = "chats.shanna" + req.params.username;

        const filter = { username: req.params.username }
        const update = {
            $push: {
                chats: {
                    user: "shanna",
                    channelID: newchannelId
                }
            }
        }
        User
            .findOneAndUpdate(filter, update)
            .then(data => {
                res.send(data)
            }).catch(err => console.log(err))
    })




router
    .route('/example2')
    .get((req, res) => {
        const filter = { username: "shanna" }
        const update = {
            $push: {
                chats: {
                    user: "WalmartDrummer",
                    channelID: "chats.shannaWalmartDrummer"
                }
            }
        }
        User
            .findOneAndUpdate(filter, update)
            .then(data => {
                res.send(data)
            }).catch(err => console.log(err))
    })

router
    .route('/example3')
    .get((req, res) => {

        const filter = { username: "email1" }
        const update = {
            $push: {
                chats: {
                    user: "shanna",
                    channelID: "chats.email1shanna"
                }
            }
        }
        User
            .findOneAndUpdate(filter, update)
            .then(data => {
                res.send(data)
            }).catch(err => console.log(err))
    })

router
    .route('/findImages')
    .get((req, res) => {
        imgModel
            .find({ username: "shanna" })
            .then(data => {
                res.send(data)
            })
    })

module.exports = router;