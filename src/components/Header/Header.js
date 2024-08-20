import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
import Logo from "../../assets/images/Header/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-logo">
          <img src={Logo} alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
