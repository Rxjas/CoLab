import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Grid from './pages/Grid';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />

        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/grid' component={Grid} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

// need to add this after the render function (from hackernoon.com by @balasubramanim)
<a href="/auth/google" class="button"></a>
<div></div>
<span class="svgIcon t-popup-svg"></span>
<svg
class="svgIcon-use"
width="25"
height="37"
viewBox="0 0 25 25"
>
<g fill="none" fill-rule="evenodd">
<path
d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"

export default App;
