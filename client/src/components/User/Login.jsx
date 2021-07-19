import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }

  const inputStyle = {
    border:0,
    outline: 0,
    background: "transparent",
    borderBottom: "1px solid Aqua"};

  return (
  

<div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group  size="lg" controlId="email">
          <Form.Label></Form.Label>
          <Form.Control style={inputStyle} 
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label></Form.Label>
          <Form.Control style={inputStyle}
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-primary" block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
     
    
  );
}