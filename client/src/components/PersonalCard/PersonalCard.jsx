import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./PersonalCard.css";
import axios from "axios";

const PersonalCard = (props) => {
  const [showBtn, setShowBtn] = useState(true);

  // this variable stores the username of whoever is currently logged in
  const currentUser = props.currentUser;
  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/grid") {
      setShowBtn(true)
    } else if (path === "/profile") {
      setShowBtn(false);
    }
  }, [path])
  // 
  const addMatch = () => {
    const route = `/api/user/match/${currentUser}`;
    // const matches = props.username;
    console.log(path)
    axios
      .put(route, { matches: props.username })
      .catch(err => console.log(err));
  }

  return (
    <>
      <Card>
        <h3>{props.username} <span id="pronouns">{props.pronouns}</span></h3>
        <h4>Roles</h4>
        <ul>
          {props.roles.map(role => {
            return <li>{role}</li>
          })}
        </ul>
        <h4>Looking for...</h4>
        <p>{props.lookingfor}</p>
        {showBtn && (<Button
          onClick={addMatch}
        >add</Button>)}
      </Card>
    </>
  )
}

export default PersonalCard;