import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Editme.css";
import axios from 'axios';


const Editme = (props) => {

  // FUTURE DEV: IMAGES
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState(props.imageURL || null);
  
  console.log(props);

   // FUTURE DEV: IMAGES
  // const showImage = () => {
  //   // add useEffect hook (componentDidMount equivalent) to check DB if there is an image already
  //   if (selectedImage === null) {
  //     return (
  //       <img src="/assets/images/placeholder.png" id="profilepic" alt="placeholder profile pic" />
  //     )
  //   } else {
  //     return <img id="profilepic" src={imageUrl} alt="selected profile pic" />;
  //   }
  // }

   // FUTURE DEV: IMAGES
  // const handleImageSubmit = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();

  //   formData.append(
  //     "file",
  //     selectedImage,
  //     selectedImage.name
  //     // add user id from global context
  //   )

  //   // send the image to the server
  //   axios.post("api/image/", formData)
  //     // Add function to say that the image has been successfully saved
  //     .then(response => {
  //       // console.log(response)
  //       if (response.status === 200) {
  //         window.alert("Image saved!")
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  // prepare image to be sent to the server and to display to the user on upload
  // const onFileChange = event => {
  //    // FUTURE DEV: IMAGES
  //   // setSelectedImage(event.target.files[0]);
  //   // const fileUrl = URL.createObjectURL(event.target.files[0])
  //   // setImageUrl(fileUrl)
  // }

  const checkEvent = event => {
    const data = document.getElementById("editForm").serialize();
    console.log(data)
  }

  const submitForm = event => {
    // handleImageSubmit(event);
    // document.body.appendChild(event.target);
    const formBulk = event.target.parentNode.parentNode.parentNode.parentNode.elements;
    const formData = {
      roles: []
    };
    for (let i = 0; i < formBulk.length; i++) {
      console.log(formBulk[i]);
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

    // console.log(formData);
    axios.put(`/api/user/${props.username}`, formData)

    props.btnclick();
  }

  return (
    <>
      <Form id="editform" method="PUT" onSubmit={submitForm}>
      {/* <Form id="editform" onSubmit={submitForm}> */}
        <Container id="formcont">
          <Row id="picrow">
            <Col xs={12} sm={6}>
              {/* <img id="profilepic" src="/assets/images/placeholder.png" alt="placeholder profile pic" /> */}
              {/* <Button id="uploadbut" variant="outline-dark">select...</Button> */}
              {/* {showImage()} */}
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
              {/* <form>
                <label htmlFor="file">Upload image</label>
                <input type="file" id="file" onChange={onFileChange} name="file" accept="image/*" />
                <button onClick={handleImageSubmit}>Save Photo</button>
              </form> */}
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
                <Form.Check name="vocalist" type="checkbox" id="vocalist" label="vocalist" checked={props.info.roles.includes("vocalist")}/>
                <Form.Check name="guitarist" type="checkbox" id="guitarist" label="guitarist" checked={props.info.roles.includes("guitarist")}/>
                <Form.Check name="pianist" type="checkbox" id="pianist" label="pianist" checked={props.info.roles.includes("pianist")} />
                <Form.Check name="bassist" type="checkbox" id="bassist" label="bassist" checked={props.info.roles.includes("bassist")} />
                <Form.Check name="saxophonist" type="checkbox" id="saxophonist" label="saxophonist" checked={props.info.roles.includes("saxophonist")} />
                <Form.Check name="percussionist" type="checkbox" id="percussionist" label="percussionist" checked={props.info.roles.includes("percussionist")} />
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
                onClick={checkEvent}
              >save</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  )
}

export default Editme;