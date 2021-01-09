import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Login from "../components/Login";
import Signup from "../components/Signup";

const Homepage = () => {
  return (
    <>
      <Tabs defaultActiveKey="login" id="homeTabs">
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="signUp" title="Sign Up">
          <Signup />
        </Tab>
      </Tabs>
    </>
  );
};

export default Homepage;