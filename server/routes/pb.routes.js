const router = require('express').Router();
const { User } = require('../models');

// route to get the keys to the client, send channel ids
router
    .route('/:username')
    .get((req, res) => {
        // find channels that the user is engaged in
        User
            .find({ username: req.params.username})
            .then(data => {
                console.log(data[0].chats)
                res.send({
                    pubkey: process.env.PB_PUB,
                    subkey: process.env.PB_SUB,
                    userinfo: data[0].chats
                })
            })
    })

module.exports = router;