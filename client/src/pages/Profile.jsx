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

const Profile = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState(null);

  // on mount, find username
  useEffect(() => {
    console.log("STEP 1 RAN")
    // passport
    fetch('/api/access/allow')
      .then((response) => {
        console.log(response);
        response.json()})
      .then((data) => {
        console.log(data)
        if (data.allowed === "allow") {
          setUsername(data.userLoggedIn)
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      });
  }, [])


  useEffect(() => {
    console.log("STEP 2")
    // wait until after the username is set by the api request, trigger by isLoggedIn and username
    if (isLoggedIn && username !== "") {
      console.log(isLoggedIn)
      // matches (passed as prop to Matches component) 
      const userNameProp = username;
      console.log(username)
      console.log(userNameProp);
      if (userNameProp === "") {
        console.log("EMPTY STRING")
      }

      fetch(`/api/user/matches/${userNameProp}`)
        // fetch(`/api/user/matches/${username}`)
        .then((response) => response.json())
        .then(data => {
          // console.log(data)
          setMatches(data);
        })
    }
  }, [isLoggedIn, username])



  useEffect(() => {
    console.log("STEP 3 RAN")
    if (username !== "" && isLoggedIn){
      console.log(matches);
      console.log(username);
      console.log(isLoggedIn)
      // wait until the matches are set, trigger by matches
      // userData
      fetch(`/api/user/${username}`)
      .then(response => response.json())
      .then(data => {
        // console.log('/api/user/:username route')
        console.log(data.data[0])
        setUserData(data.data[0])
      })
    }
  }, [matches, username])

  const showLoggedIn = () => {
    console.log(isLoggedIn)
  }
  const showUsername = () => {
    console.log(username)
  }

  // if not logged in, redirect to login screen. If logged in and username is an empty string, render "loading" div. If both are true, render content
  if (!isLoggedIn) {
    return (
      // <Redirect to="/" />
      <div>Not logged in
        <button onClick={showUsername}>Show username</button>
        <button onClick={showLoggedIn}>Show loggedin</button>
      </div>
    )
  } else {
      // if ALL the props are ready, render the main content
      // eventually add image information here
    if (username !== "" && userData !== null){
      console.log(userData)
      console.log(username)
      return (
        <>
        {/* development */}
        <div>Profile</div>
        <button onClick={showLoggedIn}>Show loggedin</button>
        <button onClick={showUsername}>Show username</button>
        {/* end of development */}
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