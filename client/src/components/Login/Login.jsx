import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router-dom';
// import "./Login.css";

const Login = (props) => {

  const [passwordState, setPasswordState] = useState("");
  const [usernameState, setUsernameState] = useState("");
  const [redirect, setRedirect] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const handlePasswordChange = (event) => {
    setPasswordState(event.target.value)
  };

  const handleUsernameChange = (event) => {
    setUsernameState(event.target.value)
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    props.handleUsername(usernameState)
    sendUsername();
    const userData = {
      username: usernameState,
      password: passwordState
    }
    fetch("/api/access/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then((response) => {
        if (response.status === 200){
          setRedirect('/profile')
        }
        if (response.status === 401){
          setErrorMessage("Username or password incorrect")
        }
      })
  }

  const sendUsername = () => {
    props.handleUsername(usernameState)
  }

  if (redirect !== "") {
    return <Redirect to ={redirect} />
  }
  return(
    <>
    {errorMessage}
      <Form>
        <Form.Group controlId="formBasicUsername" onChange={handleUsernameChange}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" onChange={handlePasswordChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit" onClick={handleLoginClick}>Login</Button>
      </Form>
    </>
  )
}

export default Login;