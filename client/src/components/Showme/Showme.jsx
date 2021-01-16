import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Showme.css";

const Showme = (props) => {

  const [imageURL, setImageURL] = useState();

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  useEffect(() => {

    if (props.username !== "") {

      const url = "/api/image/" + props.username;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // only run if there's an image associated with username
          if (data.img !== undefined) {
            var base64Flag = 'data:image/jpeg;base64,'
            var imageStr = arrayBufferToBase64(data.img.data.data);
            setImageURL(base64Flag + imageStr)
          } else {
            setImageURL("/assets/images/placeholder.png")
          }
        })
    }
  }, [])

  if (imageURL !== undefined) {
    return (
      <><Container>
        <Row>
          <Col xs={12} sm={6}>
            <img id="profilepic" src={imageURL} alt={`${props.info.firstname} ${props.info.lastname}'s profile`} />
          </Col>
          <Col xs={12} sm={6}>
            <h2 className="header2">{props.info.firstname || "firstname"} {props.info.lastname || "lastname"}</h2>
            <p className="details paragraph">{props.info.pronouns || "they/them"}, {props.info.age || 18}</p>
            <h5 className="header5">{props.username || "username"}</h5>
            <h5 className="header5">{props.info.email || "email@example.com"}</h5>
            <h5 className="header5 title">Roles</h5>
            {props.info.roles.map(role => <p className="paragraph">{role}</p>)}
            <h5 className="header5 title">Bio</h5>
            <p className="paragraph">{props.info.bio || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius pariatur architecto saepe ab? Veritatis quam ut vitae nobis, suscipit aut quia molestias voluptatem reiciendis aperiam minima delectus quis, similique architecto!"}</p>
            <h5 className="header5 title">Looking for...</h5>
            <p className="paragraph">{props.info.lookingfor || "someone to play the best song in the world"}</p>
            <Button
              variant="outline-dark"
              onClick={props.btnclick}
            >edit</Button>
          </Col>
        </Row>
      </Container>

      </>
    )
  } else {
    return (
      <div>Loading</div>
    )
  }
}

export default Showme;