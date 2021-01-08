import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

const AboutMe = (props) => {
  return (
    <>
      <Container>
        <Row id="mainRow">
          <Col>
            {/* <img src={"../src/images/placeholder.png"} alt="placeholder profile pic"/> */}
            <div id="placeholder"></div>
          </Col>
          <Col>
            {/* these will be populated with database info */}
            <label for="username">Username</label>
            <input type="text" id="username" value={props.username} />
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" value={props.firstname} />
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" value={props.lastname} />
            <label for="age">Age</label>
            <input type="number" id="age" value={props.age} />
            <label for="pronouns">Pronouns</label>
            <input type="text" id="pronouns" value={props.pronouns} />
            <label for="email">Email</label>
            <input type="email" id="email" value={props.email} />
            <h3>Roles</h3>
            <ul>
              {props.roles.forEach(role => {
                return <input type="text" class="role" value={role} />
              })}
            </ul>
            <label for="bio">Bio</label>
            <input type="text" id="bio" value={props.bio} />
            <label for="lookingfor">Looking For</label>
            <input type="text" id="lookingfor" value={props.lookingfor} />
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default AboutMe;