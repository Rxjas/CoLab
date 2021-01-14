import React, { useEffect, useState } from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import AboutMe from "../components/AboutMe";
import Messages from "../components/Messages";
import Matches from "../components/Matches";

import "./styles/Profile.css";

import { Redirect } from 'react-router-dom';

const Profile = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch('/api/access/allow')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.allowed === "allow") {
          setIsLoggedIn(true)
          setUsername(data.userLoggedIn)
        } else {
          setIsLoggedIn(false)
        }
      })
  }, [])

  if (!isLoggedIn) {
    return (
      <Redirect to="/" />
    )
  } else {

    return (
      <>
        <Tabs justify variant="pills" className="tabscont" defaultActiveKey="aboutme">
          <Tab eventKey="aboutme" className="tabber" variant="outline-dark" title="About Me">
            <AboutMe
              username={username}
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
            <Messages
            username={username}
            />
          </Tab>
          <Tab eventKey="matches" className="tabber" title="Matches">
            <Matches 
            username={username}
            />
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default Profile;