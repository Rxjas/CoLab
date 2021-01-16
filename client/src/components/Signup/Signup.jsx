import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router-dom';
import { set } from "mongoose";

const Signup = (props) => {

  const [state, setState] = useState({
    formBasicEmail: "",
    formBasicUsername: "",
    formBasicPassword: "",
    formBasicPasswordConfirm: ""
  });

  const [redirect, setRedirect] = useState("")

  const [signupError, setSignUpError] = useState(null)

  const handleFormChange = (event) => {
    const keyOfState = event.target.id;
    const valueOfState = event.target.value;
    setState({
      ...state,
      [keyOfState]: valueOfState
    })
  }

  const sendUsername = () => {
    props.handleUsername(state.formBasicUsername)
  }

  const handleSignUpClick = (event) => {
    event.preventDefault();
    console.log(state)
    if (state.formBasicPassword !== state.formBasicPasswordConfirm) {
      setSignUpError("Password and confirm password must match")
    } else {
      props.handleUsername(state.formBasicUsername)
      sendUsername();
      const userData = {
        email: state.formBasicEmail,
        username: state.formBasicUsername,
        password: state.formBasicPassword
      }
      fetch('/api/access/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // redirect: 'follow',
        body: JSON.stringify(userData)

      }).then(response => {
        return response.json();
      }).then(data => {
        if (data.success === false) {
          setSignUpError(data.error.message)
        }
        if (data.success === true) {
          setRedirect("/profile")
        }
      })
    }
  }

  if (redirect !== "") {
    return <Redirect to={redirect} />
  }
  return (
    <>
      <p>{signupError}</p>
      <Form>
        <Form.Group controlId="formBasicEmail" onChange={handleFormChange} >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicUsername" onChange={handleFormChange}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" onChange={handleFormChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm" onChange={handleFormChange}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="success" type="submit" onClick={handleSignUpClick}>Sign Up</Button>
      </Form>
    </>
  )
}

export default Signup;