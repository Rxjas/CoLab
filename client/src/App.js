import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalProvider from "./utils/GlobalContext";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Grid from "./pages/Grid";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  sendGrandpa = (childData) => {
    this.setState({ username: childData })
  }

  render() {
    return (
      <>
        <Router>
          <GlobalProvider>
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
