import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Jumbotron from "react-bootstrap/Jumbotron";
import Login from "../components/Login";
import Signup from "../components/Signup";
import queryString from "query-string";
import "./styles/Homepage.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      passingUsername : ""
    }
  }

  componentWillMount() {
    console.log(this.props)
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
    }
    console.log(this.props)
  }

  handleUsername = (childData) => {
    // event.preventDefault();
    console.log(childData)
    // this.setState({passingUsername: childData})
    // this.props.handleUsername()
    this.setState({passingUsername: childData})
    this.sendUsernameToGrandpa(childData)
  }

  sendUsernameToGrandpa = (passData) => {
    console.log(passData)
    this.props.sendGrandpa(passData)
  }

  render() {
    return (
      <>

        {/* // need to add this after the render function (from hackernoon.com by @balasubramanim) */}
        <Jumbotron id="jumbotron">
          <h3>Welcome to CoLab!</h3>
          <p id="jumbop">The brand new way to connect like-minded individuals who are looking to collaborate with others in their profession. Currently there's only support for musicians, but we're working on expanding to encompass other creativce professions such as filmmaking, photography, and programming.</p>
          <Tabs className="tabhead" defaultActiveKey="login" id="homeTabs">
            <Tab className="" eventKey="login" title="Login">
              <div className="col-xs-11 col-md-6 mr-auto containerDiv">
                <Login />
              </div>
            </Tab>
            <Tab className="" eventKey="signUp" title="Sign Up">
              <div className="col-xs-11 col-md-6 mr-auto containerDiv">
                <Signup handleUsername={this.handleUsername}/>
              </div>
            </Tab>
          </Tabs>
        </Jumbotron>
      </>
    );
  }
};

export default Homepage;