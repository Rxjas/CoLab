import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import AboutMe from "../components/AboutMe";
import Messages from "../components/Messages";
import Matches from "../components/Matches";

const Profile = () => {
  return (
    <>
      <Tabs defaultActiveKey="aboutme">
        <Tab eventKey="aboutme" title="About Me">
          <AboutMe />
        </Tab>
        <Tab eventKey="messages" title="Messages">
          <Messages />
        </Tab>
        <Tab eventKey="matches" title="Matches">
          <Matches />
        </Tab>
      </Tabs>
    </>
  )
}

export default Profile;