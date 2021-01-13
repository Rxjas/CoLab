import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Editme.css";
import axios from 'axios';


const Editme = (props) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const showImage = () => {
    // add useEffect hook (componentDidMount equivalent) to check DB if there is an image already
    if (selectedImage === null) {
      return (
        <img src="/assets/images/placeholder.png" id="profilepic" alt="placeholder profile pic" />
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
      .then(response => {
        console.log(response)
        if (response.status === 200){
          window.alert("Image saved!")
        }
      })
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
      <Form id="editform">
        <Container id="formcont">
          <Row id="picrow">
            <Col xs={12} sm={6}>
              {/* <img id="profilepic" src="/assets/images/placeholder.png" alt="placeholder profile pic" /> */}
              {/* <Button id="uploadbut" variant="outline-dark">select...</Button> */}
              {showImage()}
              <form>
                <label htmlFor="file">Upload image</label>
                <input type="file" id="file" onChange={onFileChange} name="file" accept="image/*" />
                <button onClick={handleImageSubmit}>Save Photo</button>
              </form>
            </Col>
            <Col className="formcol" xs={12} sm={6}>
              <Form.Group controlId="username">
                <Form.Label>username</Form.Label>
                <Form.Control
                  required
                  type="input"
                  autoComplete="off"
                  placeholder="please enter username"
                  defaultValue={props.username}
                />
              </Form.Group>
              <Form.Group controlId="firstname">
                <Form.Label>first name</Form.Label>
                <Form.Control
                  required
                  type="input"
                  autoComplete="off"
                  placeholder="please enter first name"
                  defaultValue={props.firstname}
                />
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>last name</Form.Label>
                <Form.Control
                  required type="input"
                  autoComplete="off"
                  placeholder="please enter last name"
                  defaultValue={props.lastname}
                />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>age</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={props.age || 18}
                  max={150}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="formcol" xs={12} sm={6}>
              <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  autoComplete="off"
                  placeholder="example@mail.com"
                  defaultValue={props.email}
                />
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
            </Col>
            <Col className="formcol" xs={12} sm={6}>
              <Form.Group controlId="pronouns">
                <Form.Label>pronouns</Form.Label>
                <Form.Control
                  required
                  as="select"
                  placeholder="they/them"
                  defaultValue={props.pronouns}
                >
                  <option>they/them</option>
                  <option>she/hers</option>
                  <option>he/him</option>
                  <option>other/prefer not to answer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>bio</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  autoComplete="off"
                  rows={3}
                />
              </Form.Group>
              <Form.Group controlId="lookingfor">
                <Form.Label>looking for</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  autoComplete="off"
                  rows={3}
                />
              </Form.Group>
              <Button
                variant="outline-dark"
                type="submit"
                onClick={props.btnclick}
              >save</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  )
}

export default Editme;