const router = require('express').Router();
const todos = require('./todo.routes');
const pb = require('./pb.routes');

var passport = require('passport');

// /api/todo
router.use('/api/todo', todos);
router.use('/api/pubnub', pb);

module.exports = router;