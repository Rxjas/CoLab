import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./PersonalCard.css";
import axios from "axios";

const PersonalCard = (props) => {
  const addPerson = (event) => {
    event.preventDefault();
    console.log(window.location.href);
    const route = `${window.location.href}/api/user/add/${event.target.id}`;
    axios
      .put(route, {user: props.currentUser})
      .then()
      .catch(err => console.log(err))
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
        <Button
          className={props.showButton}
          onClick={addPerson}
          id={props.username}
        >
          Match
        </Button>
      </Card>
    </>
  )
}

export default PersonalCard;