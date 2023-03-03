import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mynavbar.css";

function Mynavbar() {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" style={{height:"60px"}}>
      <Container>
        <Navbar.Brand href="#">
          <img src="./image/logo.png" alt="logo" height={20} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navbar-nav ms-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Features">Features</Nav.Link>
            <Nav.Link href="/Get Started">Get Started</Nav.Link>
            <Nav.Link href="/We Provide You">We Provide You</Nav.Link>
            <Nav.Link href="/Get Wallet">Get Wallet</Nav.Link>
            <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
