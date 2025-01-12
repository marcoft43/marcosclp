import '../App.css';

import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Front_Navbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="front-navbar">
        <Nav className="custom-nav">
          <Nav.Link href="/Barcelona" className='me-3'>Barcelona</Nav.Link>
          <Nav.Link href="/Berlin" className='me-3'>Berlin</Nav.Link>
          <Nav.Link href="/Bologna" className='me-3'>Bologna</Nav.Link>
          <Nav.Link href="/Bronte" className='me-3'>Bronte</Nav.Link>
          <Nav.Link href="/Catania" className='me-3'>Catania</Nav.Link>
          <Nav.Link href="/Chicago" className='me-3'>Chicago</Nav.Link>
          <Nav.Link href="/Columbus" className='me-3'>Ohio State</Nav.Link>
          <Nav.Link href="/Dresden" className='me-3'>Dresden</Nav.Link>
          <Nav.Link href="/Dusseldorf" className='me-3'>Düsseldorf</Nav.Link>
          <Nav.Link href="/Firenze" className='me-3'>Firenze</Nav.Link>
          <Nav.Link href="/FL" className='me-3'>Fort Lauderdale</Nav.Link>
          <Nav.Link href="/Hannover" className='me-3'>Hannover</Nav.Link>
          <Nav.Link href="/Helsinki" className='me-3'>Helsinki</Nav.Link>
          <Nav.Link href="/Houston" className='me-3'>Houston</Nav.Link>
          <Nav.Link href="/Hudson" className='me-3'>Hudson</Nav.Link>
          <Nav.Link href="/HK" className='me-3'>Hong Kong</Nav.Link>
          <Nav.Link href="/Koln" className='me-3'>Köln</Nav.Link>
          <Nav.Link href="/LA" className='me-3'>Los Angeles</Nav.Link>
          <Nav.Link href="/Leipzig" className='me-3'>Leipzig</Nav.Link>
          <Nav.Link href="/Madison" className='me-3'>Madison</Nav.Link>
          <Nav.Link href="/Munich" className='me-3'>München</Nav.Link>
          <Nav.Link href="/Noto" className='me-3'>Noto</Nav.Link>
          <Nav.Link href="/NYC" className='me-3'>New York City</Nav.Link>
          <Nav.Link href="/Potsdam" className='me-3'>Potsdam</Nav.Link>
          <Nav.Link href="/Praha" className='me-3'>Praha</Nav.Link>
          <Nav.Link href="/Ragusa" className='me-3'>Ragusa</Nav.Link>
          <Nav.Link href="/Rostock" className='me-3'>Rostock</Nav.Link>
          <Nav.Link href="/Siracusa" className='me-3'>Siracusa</Nav.Link>
          <Nav.Link href="/Stuttgart" className='me-3'>Stuttgart</Nav.Link>
          <Nav.Link href="/Tallinn" className='me-3'>Tallinn</Nav.Link>
          <Nav.Link href="/Taormina" className='me-3'>Taormina</Nav.Link>
          <Nav.Link href="/Virginia" className='me-3'>Virginia</Nav.Link>
          <Nav.Link href="/Wien" className='me-3'>Wien</Nav.Link>
          <Nav.Link href="/Zollverein" className='me-3'>Zollverein</Nav.Link>
          <Nav.Link href="/Zurich" className='me-3'>Zürich</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Front_Navbar;