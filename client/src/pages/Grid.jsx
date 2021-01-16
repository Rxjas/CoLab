import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// set sizing for columns like so:
// example: col is 12 wide on xs screens, 6 wide on small and larger
// <Col xs={12} sm={6}></Col>
import CardDeck from 'react-bootstrap/CardDeck';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PersonalCard from "../components/PersonalCard";
import "./styles/Grid.css";
import { Redirect } from 'react-router-dom';

const Grid = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/access/allow')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.allowed === "allow") {
          setIsLoggedIn(true);
          setUsername(data.userLoggedIn)
        } else {
          setIsLoggedIn(false)
        }
      })
    fetch('/api/user/')
      .then(response => response.json())
      .then(data => {
            console.log("users:");
            console.log(data.data);
            setUsers(data.data)
      })
  }, [])

  const runParam = (param) => {

  }

  if (!isLoggedIn) {
    return (
      <Redirect to="/" />
    )
  } else {

    return (
      <>
        <Navbar loggedIn={isLoggedIn}/>
        <Sidebar runParam={(param) => runParam(param)}/>
        <CardDeck>
          {/* need to pass through search terms and loop over results */}
          {users.map(user => {
            return <PersonalCard
              currentUser={username}
              username={user.username}
              roles={user.roles}
              pronouns={user.pronouns} 
              lookingfor={user.lookingfor}
              chats={user.chats}
            />
          })}
          {/* {element.map(infos => {
        <PersonalCard
          {{ infos }} <-- is that how we deconstruct an object within react parenthesis?
        />
      })} */}
          {/* demo cards for styling */}
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
          <PersonalCard
            username="musicman"
            pronouns="he/him"
            roles={["vocalist", "pianist", "guitarist"]}
            lookingfor="a good singer"
          />
        </CardDeck>
        <p>the grid</p>
      </>
    );
  }
};

export default Grid;