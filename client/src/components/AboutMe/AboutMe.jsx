import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

const AboutMe = () => {
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
              <h3>Name</h3>
              <h3>City</h3>
              <h3>skillz</h3>
              <h3>idk summary about me</h3>
            </Col>
        </Row>
      </Container>
    </>
  )
};

export default AboutMe;