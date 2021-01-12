import React, { useState } from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

const AboutMe = (props) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  const showImage = () => {
    // add useEffect hook (componentDidMount equivalent) to check DB if there is an image already
    if (selectedImage === null) {
      return (
        <img src="/assets/images/placeholder.png" alt="placeholder profile pic" />
      )
    } else {
      return <img src={imageUrl} alt="selected profile pic" />;
    }
  }

  const handleImageSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append(
      "file",
      selectedImage,
      selectedImage.name
      // add user id from global context
    )

    // send the image to the server
    axios.post("api/image/", formData)
      // Add function to say that the image has been successfully saved
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  // prepare image to be sent to the server and to display to the user on upload
  const onFileChange = event => {
    setSelectedImage(event.target.files[0]);
    const fileUrl = URL.createObjectURL(event.target.files[0])
    setImageUrl(fileUrl)
  }


  return (
    <>
      <Container>
        <Row id="mainRow">
          <Col>
            <form>
              <Row>
                <Col>
                  {showImage()}
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="file">Upload Image</label>
                </Col>
              </Row>
              <Row>
                <input type="file" id="file" onChange={onFileChange} name="file" accept="image/*" />
                <button onClick={handleImageSubmit}>Save Photo</button>
              </Row>
            </form>
          </Col>
          <Col>
            {/* these will be populated with database info */}
            <Form>
              <Form.Group controlId="username">
                <Form.Label>username</Form.Label>
                <Form.Control type="input" autoComplete="off" placeholder={props.username || "please enter username"} />
              </Form.Group>
              <Form.Group controlId="firstname">
                <Form.Label>first name</Form.Label>
                <Form.Control type="input" autoComplete="off" placeholder={props.firstname || "please enter first name"} />
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>last name</Form.Label>
                <Form.Control type="input" autoComplete="off" placeholder={props.lastname || "please enter last name"} />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>age</Form.Label>
                <Form.Control type="number" defaultValue={props.age || 18} />
                {/* <input type="number" defaultValue={props.age || 18} /> */}
              </Form.Group>
              <Form.Group controlId="pronouns">
                <Form.Label>pronouns</Form.Label>
                <Form.Control as="select" placeholder={props.pronouns || "they/them"}>
                  <option>they/them</option>
                  <option>she/hers</option>
                  <option>he/him</option>
                  <option>other/prefer not to answer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" autoComplete="off" placeholder={props.email || "example@mail.com"} />
              </Form.Group>
              <Form.Group controlId="roles">
                <Form.Label>roles</Form.Label>
                <Form.Check type="checkbox" id="vocalist" label="vocalist" />
                <Form.Check type="checkbox" id="guitarist" label="guitarist" />
                <Form.Check type="checkbox" id="pianist" label="pianist" />
                <Form.Check type="checkbox" id="bassist" label="bassist" />
                <Form.Check type="checkbox" id="saxophonist" label="saxophonist" />
                <Form.Check type="checkbox" id="percussionist" label="percussionist" />
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>bio</Form.Label>
                <Form.Control as="textarea" autoComplete="off" rows={3} />
              </Form.Group>
              <Form.Group controlId="lookingfor">
                <Form.Label>looking for</Form.Label>
                <Form.Control as="textarea" autoComplete="off" rows={3} />
              </Form.Group>
              <Button type="submit">save</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default AboutMe;