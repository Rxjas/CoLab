import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalProvider from "./utils/GlobalContext";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Grid from "./pages/Grid";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import queryString from "query-string";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  sendGrandpa = (childData) => {
    console.log(childData)
    this.setState({ username: childData })
  }

  showUsername = () => {
    console.log(this.state.username)
  }

  render() {
    return (
      <>
        <Router>
          <GlobalProvider>
            {/* <Navbar /> */}
            <div className="App">
              <Switch>
                <Route
                  exact path="/"
                  render={(props) => (
                    <Homepage {...props} sendGrandpa={this.sendGrandpa} />
                  )}
                />
                <Route
                  exact path="/profile"
                  render={(props) => (
                    <Profile {...props} username={this.state.username} />
                  )}
                />
                <Route 
                exact path="/grid" 
                render={(props) => (
                  <Grid {...props} username={this.state.username} />
                )}
                />
              </Switch>
            </div>
            <Footer />
          </GlobalProvider>
        </Router>
      </>
    );
  }
}

export default App;
