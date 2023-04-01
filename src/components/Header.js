import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.css"


export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Custom Hooks</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={(link) => link.isActive ? "active padding" : ""} to="/logger" style={{marginLeft:"60px", color:"#fff" , textDecoration:"none"}}>Logger</NavLink>
            <NavLink to="/counter" style={{marginLeft:"60px", color:"#fff" , textDecoration:"none"}}>Counter</NavLink>
            <NavLink to="/fetch" style={{marginLeft:"60px", color:"#fff" , textDecoration:"none"}}>Fetch</NavLink>
            <NavLink to="/localstorage" style={{marginLeft:"60px", color:"#fff" , textDecoration:"none"}}>LocalStorage</NavLink>
            <NavLink to="/input" style={{marginLeft:"60px", color:"#fff" , textDecoration:"none"}}>Input</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
