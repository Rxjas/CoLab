import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Grid from './pages/Grid';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from "query-string";

function App() {
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
}
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

export default App;
