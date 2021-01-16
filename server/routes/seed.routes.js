const router = require('express').Router();
const { User } = require('../models');

router
    .route('/example1')
    .get((req, res) => {

        const filter = { username: 'shanna' }
        const update = {
            $push: {
                chats: {
                    user: "email1",
                    channelID: "chats.email1shanna"
                }
            }
        }
        console.log(filter)
        User
            .findOneAndUpdate(filter, update)
            .then(data => {
                console.log(data)
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
        console.log(filter)
        User
            .findOneAndUpdate(filter, update)
            .then(data => {
                console.log(data)
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
        console.log(filter)
        User
            .findOneAndUpdate(filter, update)
            .then(data => {
                console.log(data)
                res.send(data)
            }).catch(err => console.log(err))
    })

module.exports = router;