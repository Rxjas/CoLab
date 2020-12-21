import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Homepage = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" id="login">Login</Button>
        <Button variant="primary" type="submit" id="signup">Sign Up</Button>
      </Form>
    </>
  );
};

export default Homepage;