import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

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
    );
    registerServiceWorker();
