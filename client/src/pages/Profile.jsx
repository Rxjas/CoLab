import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import AboutMe from "../components/AboutMe";
import Messages from "../components/Messages";
import Matches from "../components/Matches";

import "./styles/Profile.css";

const Profile = () => {
  return (
    <>    
      <Tabs justify variant="pills" className="tabscont" defaultActiveKey="aboutme">
        <Tab eventKey="aboutme" className="tabber" variant="outline-dark" title="About Me">
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
        <Tab eventKey="messages" className="tabber" title="Messages">
          <Messages />
        </Tab>
        <Tab eventKey="matches" className="tabber" title="Matches">
          <Matches />
        </Tab>
      </Tabs>
    </>
  )
}

export default Profile;