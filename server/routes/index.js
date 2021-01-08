const router = require('express').Router();
const user = require('./user.routes.js');
const pb = require('./pb.routes.js');

//api/user
router.use('/api/user', user);
// /api/pubnub
router.use('/api/pubnub', pb);

module.exports = router;