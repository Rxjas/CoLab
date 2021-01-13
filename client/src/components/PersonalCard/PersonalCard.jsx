import React from "react";
import Card from "react-bootstrap/Card";
import "./PersonalCard.css";

const PersonalCard = (props) => {
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
      </Card>
    </>
  )
}

export default PersonalCard;