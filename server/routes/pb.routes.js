const router = require('express').Router();

// route to get the keys to the client
router
    .route('/')
    .get((req, res) => {
        res.send({
            pubkey: process.env.PB_PUB,
            subkey: process.env.PB_SUB
        })
    })

module.exports = router;