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
              <input type="text" value={props.username} />
              <input type="text" value={props.firstname} />
              <input type="text" value={props.lastname} />
              <input type="number" value={props.age} />
              <input type="text" value={props.pronouns} />
              <input type="email" value={props.email} />
              <h3>Roles</h3>
              <ul>
                {props.roles.forEach(role => {
                  return <input type="text" value={role} />
                })}
              </ul>
              <input type="text" value={props.bio} />
            </Col>
        </Row>
      </Container>
    </>
  )
};

export default AboutMe;