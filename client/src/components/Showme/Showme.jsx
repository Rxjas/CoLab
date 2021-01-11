import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Showme.css";

const Showme = (props) => {
  return (
    <><Container>
      <Row>
        <Col xs={12} sm={6}>
          <img id="profilepic" src={props.image || "/assets/images/placeholder.png"} alt={`${props.firstname} ${props.lastname}'s profile`} />
        </Col>
        <Col xs={12} sm={6}>
          <h2 className="header2">{props.firstname || "firstname"} {props.lastname || "lastname"}</h2>
          <p className="details paragraph">{props.pronouns || "they/them"}, {props.age || 18}</p>
          <h5 className="header5">{props.username || "username"}</h5>
          <h5 className="header5">{props.email || "email@example.com"}</h5>
          <h5 className="header5 title">Roles</h5>
          {"vocalist" || props.roles.foreach(role => {
            <p className="paragraph">{role}</p>
          })}
          <h5 className="header5 title">Bio</h5>
          <p className="paragraph">{props.bio || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius pariatur architecto saepe ab? Veritatis quam ut vitae nobis, suscipit aut quia molestias voluptatem reiciendis aperiam minima delectus quis, similique architecto!"}</p>
          <h5 className="header5 title">Looking for...</h5>
          <p className="paragraph">{props.lookingfor || "someone to play the best song in the world"}</p>
          <Button
            variant="outline-dark"
            onClick={props.btnclick}
          >edit</Button>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default Showme;