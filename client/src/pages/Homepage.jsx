import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Jumbotron from "react-bootstrap/Jumbotron";
import Login from "../components/Login";
import Signup from "../components/Signup";
import queryString from "query-string";
import "./styles/Homepage.css";

class Homepage extends Component {
  componentWillMount() {
    console.log(this.props)
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
    }
    console.log(this.props)
  }
  render() {
    return (
      <>

        {/* // need to add this after the render function (from hackernoon.com by @balasubramanim) */}
        <Jumbotron id="jumbotron">
          <h3>Welcome to CoLab!</h3>
          <p id="jumbop">The brand new way to connect like-minded individuals who are looking to collaborate with others in their profession. Currently there's only support for musicians, but we're working on expanding to encompass other creativce professions such as filmmaking, photography, and programming.</p>
          {/* <a id="googlink" href="/auth/google" class="button">
            <div id="text-container">
            <span class="svgIcon t-popup-svg">
            <svg
            class="svgIcon-use"
            width="25"
            height="37"
            viewBox="0 0 25 25"
            >
            <g fill="none" fill-rule="evenodd">
            <path
            d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
            fill="#4285F4"
            />
            <path
            d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
            fill="#34A853"
            />
            <path
            d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
            fill="#FBBC05"
            />
            <path
            d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
            fill="#EA4335"
            />
            </g>
            </svg>
            </span>
            <span class="button-label">Sign in with Google</span>
            </div>
          </a> */}
          <Tabs className="tabhead" defaultActiveKey="login" id="homeTabs">
            <Tab className="" eventKey="login" title="Login">
              <div className="col-xs-11 col-md-6 mr-auto containerDiv">
                <Login />
              </div>
            </Tab>
            <Tab className="" eventKey="signUp" title="Sign Up">
              <div className="col-xs-11 col-md-6 mr-auto containerDiv">
                <Signup />
              </div>
            </Tab>
          </Tabs>
        </Jumbotron>
      </>
    );
  }
};

export default Homepage;