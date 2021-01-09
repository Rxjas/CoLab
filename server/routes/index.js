const router = require('express').Router();
const todos = require('./todo.routes');
const pb = require('./pb.routes');

//passport auth
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// /api/todo
router.use('/api/todo', todos);
router.use('/api/pubnub', pb);
import App from "./App";

module.exports = router;