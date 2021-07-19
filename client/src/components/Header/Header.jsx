import {React, useState} from "react";
import {Navbar, Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
import Logo from "../../assets/images/SavgenMottoLogo.png";
import "./Header.css"


function Header(){
  const [loggedIn, setLoggedIn] = useState(true);

  function logout(){
    setLoggedIn(false)
  }
  

    return (
      
  <Navbar variant="light" className="color-nav ps-0 pe-2 pb-0" >
  <Container fluid className="px-0">
  <div className="d-flex justify-content-between w-100" style={{marginLeft: "12%"}}>
  
  <Navbar.Brand href="/home" style={{paddingRight: "2%"}}><img
        src={Logo}
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
    <Nav.Link href={loggedIn ? "/dashboard" : "/login"}> 
    {loggedIn ? "Dashboard" : "Check your valves"}</Nav.Link>
    
      <NavDropdown style={{marginLeft:"5%"}} title="Learn more" id="basic-nav-dropdown">
        <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
        <NavDropdown.Item href="/Savgen">Savgen</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/register"> Register </NavDropdown.Item>
      </NavDropdown>
      {console.log(loggedIn)}
      {loggedIn ?  <Nav.Link onClick={logout} style={{marginLeft:"200%"}}> Logout </Nav.Link> : null }
    </Nav>
  </Navbar.Collapse>
  </div>
  </Container>
  
  </Navbar>
  
  

    )
};

export default Header;