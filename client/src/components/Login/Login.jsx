import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router-dom';
// import { response } from "express";
// import "./Login.css";

// add request to /api/login on submit

const Login = () => {

  const [passwordState, setPasswordState] = useState("");
  const [usernameState, setUsernameState] = useState("");
  const [redirect, setRedirect] = useState("")

  const handlePasswordChange = (event) => {
    setPasswordState(event.target.value)
  };

  const handleUsernameChange = (event) => {
    setUsernameState(event.target.value)
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
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
        console.log(response)
        if (response.status === 200){
          console.log("RIGHT STATUS")
          setRedirect('/profile')
        }
      })
  }

  if (redirect !== "") {
    return <Redirect to ={redirect} />
  }
  return(
    <>
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