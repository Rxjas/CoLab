import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Messages from "../components/Messages";
import Matches from "../components/Matches";

import "./styles/Profile.css";

const Profile = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // passport
    fetch('/api/access/allow')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        if (data.allowed === "allow") {
          setIsLoggedIn(true)
          setUsername(data.userLoggedIn)
        } else {
          setIsLoggedIn(false)
        }
      });
    
    if (isLoggedIn) {
      // matches (passed as prop to Matches component) 
      fetch(`/api/user/matches/${username}`)
      // fetch(`/api/user/matches/${username}`)
        .then((response) => response.json())
        .then(data => {
          // console.log(data)
          setMatches(data);
        })
  
      // userData
      fetch(`/api/user/${username}`)
        .then(response => response.json())
        .then(data => {
          // console.log('/api/user/:username route')
          // console.log(data.data[0])
          setUserData(data.data[0])
        })
    }
  }, [username, isLoggedIn])

  if (!isLoggedIn) {
    return (
      <Redirect to="/" />
    )
  } else {

    return (
      <>
      <Navbar loggedIn={isLoggedIn}/>
        <Tabs justify variant="pills" className="tabscont" defaultActiveKey="aboutme">
          <Tab eventKey="aboutme" className="tabber" variant="outline-dark" title="About Me">
            <AboutMe
              info={userData}
              // username={username}
              // firstname="buster"
              // lastname="scruggs"
              // age="42"
              // pronouns="he/him"
              // email="buster@scruggs.com"
              // roles={["gunslinger", "singer", "varmint"]}
              // bio="cheerful singing cowboy"
              // lookingfor="Frenchman's Gulch"
            />
          </Tab>
          <Tab
            eventKey="messages"
            className="tabber"
            title="Messages" 
          >
            <Messages
              username={username}
            />
          </Tab>
          <Tab eventKey="matches" className="tabber" title="Matches">
            <Matches 
              username={username}
              matches={matches}
            />
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default Profile;