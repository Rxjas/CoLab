const router = require('express').Router();
const { User } = require('../models');
var imgModel = require('./../models/image');

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