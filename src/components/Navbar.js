import '../App.css';

import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Front_Navbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="front-navbar">
        <Navbar.Brand as={Link} to="/" className='me-5'>Home</Navbar.Brand>
        <Nav className="custom-nav">
          <Nav.Link href="/Berlin" className='me-3'>Berlin</Nav.Link>
          <Nav.Link href="/Bronte" className='me-3'>Bronte</Nav.Link>
          <Nav.Link href="/Catania" className='me-3'>Catania</Nav.Link>
          <Nav.Link href="/Dusseldorf" className='me-3'>Düsseldorf</Nav.Link>
          <Nav.Link href="/Firenze" className='me-3'>Firenze</Nav.Link>
          <Nav.Link href="/Helsinki" className='me-3'>Helsinki</Nav.Link>
          <Nav.Link href="/Koln" className='me-3'>Köln</Nav.Link>
          <Nav.Link href="/Munich" className='me-3'>München</Nav.Link>
          <Nav.Link href="/Potsdam" className='me-3'>Potsdam</Nav.Link>
          <Nav.Link href="/Praha" className='me-3'>Praha</Nav.Link>
          <Nav.Link href="/Siracusa" className='me-3'>Siracusa</Nav.Link>
          <Nav.Link href="/Tallinn" className='me-3'>Tallinn</Nav.Link>
          <Nav.Link href="/Wien" className='me-3'>Wien</Nav.Link>
          <Nav.Link href="/Zurich" className='me-3'>Zürich</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Front_Navbar;