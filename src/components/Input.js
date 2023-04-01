import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import useInput from "../hooks/useInput";

export const Input = () => {
  const [username, resetUsername, usernameBinding] = useInput("");
  const [password, resetPassword, passwordBinding] = useInput("");
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Hello ${username}, welcome.`);
    resetPassword("");
    resetUsername("");
  };
  return (
    <Container className="mt-5">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            {...usernameBinding}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...passwordBinding}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
