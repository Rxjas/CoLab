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
          <AboutMe 
            username="thisisatest"
            firstname="buster"
            lastname="scruggs"
            age="42"
            pronouns="he/him"
            email="buster@scruggs.com"
            roles={["gunslinger", "singer", "varmint"]}
            bio="cheerful singing cowboy"
            lookingfor="Frenchman's Gulch"
          />
        </Tab>
        <Tab eventKey="messages" title="Messages">
          <p>my messages yay</p>
          <Messages />
        </Tab>
        <Tab eventKey="matches" title="Matches">
          <p>ones with whom I've matched</p>
          <Matches />
        </Tab>
      </Tabs>
    </>
  )
}

export default Profile;