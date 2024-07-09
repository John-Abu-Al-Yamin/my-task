import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import { FaFlag } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo img-fluid rounded" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className="rounded-circle fs-2">
              <FaFlag />
            </Nav.Link>
            <Nav.Link href="/" className="rounded-circle fs-2">
              <CiImageOn />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
