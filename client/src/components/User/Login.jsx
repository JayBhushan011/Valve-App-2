import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();
    
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      window.location = "/"

    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

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
        {error && <span className="error-message">{error}</span>}
        <Button variant="outline-primary" block size="lg" type="submit" className="btn">
          Login
        </Button>
      </Form>
    </div>
     
    
  );
}