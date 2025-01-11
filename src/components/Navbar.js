import '../App.css';

import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Front_Navbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="front-navbar">
        <Navbar.Brand as={Link} to="/" className='me-5'>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Berlin" className='me-3'>Berlin</Nav.Link>
          <Nav.Link href="/Catania" className='me-3'>Catania</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Front_Navbar;