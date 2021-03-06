import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Editme.css";
import axios from 'axios';


const Editme = (props) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState();

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  const findSavedImage = () => {
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

  useEffect(() => {

    if (props.username !== "") {
      findSavedImage();
    }

  }, [])

  // FUTURE DEV: IMAGES
  const handleImageSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append(
      "file",
      selectedImage,
      selectedImage.name
    )

    // send the image to the server
    const url = "/api/image/" + props.username
    axios.post(url, formData)
      // Add function to say that the image has been successfully saved
      .then(response => {
        if (response.status === 200) {
          window.alert("Image saved!")
          findSavedImage();
        }
      })
      .catch(err => console.log(err))
  }

  // prepare image to be sent to the server and to display to the user on upload
  const onFileChange = event => {
    setSelectedImage(event.target.files[0]);
    const fileUrl = URL.createObjectURL(event.target.files[0])
    setImageURL(fileUrl)
  }

  const checkEvent = event => {
    const data = document.getElementById("editForm").serialize();
    console.log(data)
  }

  const submitForm = event => {
    event.preventDefault();
    // handleImageSubmit(event);
    // document.body.appendChild(event.target);
    // const form = document.getElementById("editform");
    const data = new FormData(event.target);
    // for (var [key, value] of data.entries()) {
    //   console.log(key, value)
    // }
    const formBulk = event.target.elements;
    const formData = {
      roles: []
    };
    for (let i = 0; i < formBulk.length; i++) {
      let element = formBulk[i];
      const key = element.name;
      if (element.type === "checkbox") {
        if (element.checked) {
          formData.roles.push(key);
        }
      } else {
        let value = element.value;
        if (element.type === "number") {
          value = parseInt(value);
        }
        formData[key] = value;
      }
    }

    axios.put(`/api/user/${props.username}`, formData)

    props.btnclick();
    // return false;
  }

  return (
    <>
      <Form id="editform" onSubmit={submitForm}>
        {/* <Form id="editform" onSubmit={submitForm}> */}
        <Container id="formcont">
          <Row id="picrow">
            <Col xs={12} sm={6}>
              <img id="profilepic" src={imageURL} alt="placeholder profile pic" />
              {/* <Button id="uploadbut" variant="outline-dark">Upload image...</Button> */}
              {/* <Form.Group controlId="photo">
                <Form.Label>Upload image</Form.Label>
                <Form.File
                  required
                  id="file"
                  onChange={onFileChange}
                  name="file"
                  accept="image/*"
                ></Form.File>
              </Form.Group> */}
              <form>
                <label htmlFor="file">Upload image</label>
                <input type="file" id="file" onChange={onFileChange} name="file" accept="image/*" />
                <button onClick={handleImageSubmit}>Save Photo</button>
              </form>
            </Col>
            <Col className="formcol" xs={12} sm={6}>
              {/* Don't allow to change username */}
              {/* <Form.Group controlId="username">
                <Form.Label>username</Form.Label>
                <Form.Control
                  required
                  name="username"
                  type="input"
                  autoComplete="off"
                  placeholder="please enter username"
                  defaultValue={props.username}
                />
              </Form.Group> */}
              <Form.Group controlId="firstname">
                <Form.Label>first name</Form.Label>
                <Form.Control
                  required
                  type="input"
                  name="firstname"
                  autoComplete="off"
                  placeholder="please enter first name"
                  defaultValue={props.info.firstname}
                />
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>last name</Form.Label>
                <Form.Control
                  required
                  type="input"
                  name="lastname"
                  autoComplete="off"
                  placeholder="please enter last name"
                  defaultValue={props.info.lastname}
                />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>age</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="age"
                  defaultValue={props.info.age || 18}
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
                  name="email"
                  autoComplete="off"
                  placeholder="example@mail.com"
                  defaultValue={props.info.email}
                />
              </Form.Group>
              <Form.Group controlId="roles">
                <Form.Label>roles</Form.Label>
                <Form.Check name="vocalist" type="checkbox" id="vocalist" label="vocalist" value={props.info.roles.includes("vocalist")} />
                <Form.Check name="guitarist" type="checkbox" id="guitarist" label="guitarist" value={props.info.roles.includes("guitarist")} />
                <Form.Check name="pianist" type="checkbox" id="pianist" label="pianist" value={props.info.roles.includes("pianist")} />
                <Form.Check name="violinist" type="checkbox" id="violinist" label="violinist" value={props.info.roles.includes("violinist")} />
                <Form.Check name="bassist" type="checkbox" id="bassist" label="bassist" value={props.info.roles.includes("bassist")} />
                <Form.Check name="saxophonist" type="checkbox" id="saxophonist" label="saxophonist" value={props.info.roles.includes("saxophonist")} />
                <Form.Check name="percussionist" type="checkbox" id="percussionist" label="percussionist" value={props.info.roles.includes("percussionist")} />
                <Form.Check name="harpist" type="checkbox" id="harpist" label="harpist" value={props.info.roles.includes("harpist")} />
              </Form.Group>
            </Col>
            <Col className="formcol" xs={12} sm={6}>
              <Form.Group controlId="pronouns">
                <Form.Label>pronouns</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="pronouns"
                  placeholder="they/them"
                  defaultValue={props.info.pronouns}
                >
                  <option>they/them</option>
                  <option>she/her</option>
                  <option>he/him</option>
                  <option>other/prefer not to answer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>bio</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="bio"
                  autoComplete="off"
                  rows={3}
                  defaultValue={props.info.bio}
                />
              </Form.Group>
              <Form.Group controlId="lookingfor">
                <Form.Label>looking for</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="lookingfor"
                  autoComplete="off"
                  rows={3}
                  defaultValue={props.info.lookingfor}
                />
              </Form.Group>
              <Button
                variant="outline-dark"
                type="submit"
              // onClick={checkEvent}
              >save</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  )
}

export default Editme;