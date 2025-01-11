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
          <Nav.Link href="/Firenze" className='me-3'>Firenze</Nav.Link>
          <Nav.Link href="/Potsdam" className='me-3'>Potsdam</Nav.Link>
          <Nav.Link href="/Praha" className='me-3'>Praha</Nav.Link>
          <Nav.Link href="/Tallinn" className='me-3'>Tallinn</Nav.Link>
          <Nav.Link href="/Wien" className='me-3'>Wien</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Front_Navbar;