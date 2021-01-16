import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Messages from "../components/Messages";

import "./styles/Profile.css";

const Profile = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState(null);

  // on mount, find username
  useEffect(() => {
    // passport
    fetch('/api/access/allow', {
      method: 'POST'
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.allowed === "allow") {
          setUsername(data.userLoggedIn)
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      });
  }, [])


  useEffect(() => {
    // wait until after the username is set by the api request, trigger by isLoggedIn and username
    if (isLoggedIn && username !== "") {
      // matches (passed as prop to Matches component) 
      const userNameProp = username;

      fetch(`/api/user/matches/${userNameProp}`)
        // fetch(`/api/user/matches/${username}`)
        .then((response) => {
          return response.json()})
        .then(data => {
          setMatches(data.messages);
        })
    }
  }, [isLoggedIn, username])



  useEffect(() => {
    if (username !== "" && isLoggedIn){
      // wait until the matches are set, trigger by matches

      fetch(`/api/user/${username}`)
      .then(response => {
        return response.json()
    })
      .then(data => {
        setUserData(data.message[0])
      })
    }
  }, [matches, username])

  // if not logged in, redirect to login screen. If logged in and username is an empty string, render "loading" div. If both are true, render content
  if (!isLoggedIn) {
    return (
      <Redirect to="/" />
    )
  } else {
      // if ALL the props are ready, render the main content
    if (username !== "" && userData !== null){
      return (
        <>
        <Navbar loggedIn={isLoggedIn} />
        <Tabs justify variant="pills" className="tabscont" defaultActiveKey="aboutme">
          <Tab eventKey="aboutme" className="tabber" variant="outline-dark" title="About Me">
            <AboutMe
            info={userData}
            username={username}
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
          {/* <Tab eventKey="matches" className="tabber" title="Matches">
            <Matches 
            username={props.username}
            matches={matches}
            />
          </Tab> */}
        </Tabs>
      </>
    )
  } else {
    return (
      <div>LOADING</div>
    )
  }
  }
}

export default Profile;