import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Jumbotron from "react-bootstrap/Jumbotron";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";
import "./styles/Homepage.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      passingUsername : ""
    }
  }

  handleUsername = (childData) => {
    this.setState({passingUsername: childData})
    this.sendUsernameToGrandpa(childData)
  }

  sendUsernameToGrandpa = (passData) => {
    this.props.sendGrandpa(passData)
  }

  render() {
    return (
      <>
        <Navbar loggedIn={false}/>
        {/* // need to add this after the render function (from hackernoon.com by @balasubramanim) */}
        <Jumbotron id="jumbotron">
          <h3>Welcome to CoLab!</h3>
          <p id="jumbop">The brand new way to connect like-minded individuals who are looking to collaborate with others in their profession. Currently there's only support for musicians, but we're working on expanding to encompass other creativce professions such as filmmaking, photography, and programming.</p>
          <Tabs className="tabhead" defaultActiveKey="login" id="homeTabs">
            <Tab className="" eventKey="login" title="Login">
              <div className="col-xs-11 col-md-6 mr-auto containerDiv">
                <Login handleUsername={this.handleUsername}/>
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