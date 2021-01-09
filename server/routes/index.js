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
import registerServiceWorker from "./registerServiceWorker";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route path="/" component={App} /> 
    </Switch>
    </BrowserRouter>
    document.getElementById("root")

module.exports = router;