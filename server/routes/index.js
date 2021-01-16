const router = require('express').Router();
const pb = require('./pb.routes');
const img = require('./image.routes');
const user = require('./user.routes.js');
const access = require('./access.routes');
const seed = require('./seed.routes');


//api/user
router.use('/api/user', user);
//  messages routes
router.use('/api/pubnub', pb);
// images routes
router.use('/api/image', img);
// authorization routes
router.use('/api/access', access);
// seeds for demonstration and development
router.use('/api/seed', seed);

module.exports = router;