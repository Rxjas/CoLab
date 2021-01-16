const router = require('express').Router();
const todos = require('./todo.routes');
const pb = require('./pb.routes');
const img = require('./image.routes');
const user = require('./user.routes.js');
const access = require('./access.routes');
const seed = require('./seed.routes');

var passport = require('passport');


//api/user
router.use('/api/user', user);

// /api/todo
router.use('/api/todo', todos);
//  messages routes
router.use('/api/pubnub', pb);
// images routes
router.use('/api/image', img);
// authorization routes
router.use('/api/access', access);

router.use('/api/seed', seed);

module.exports = router;