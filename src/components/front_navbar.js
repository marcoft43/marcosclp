import '../App.css';

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Front_Navbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="front-navbar">
        <Nav className="custom-nav">
          <Nav.Link href="/Berlin" className='me-3 navbar-camera'>Pictures</Nav.Link>
          <Nav.Link href="/Plants" className='me-3 navbar-camera'>Smart Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Front_Navbar;