import '../App.css';

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Front_Navbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="front-navbar">
        <Nav className="custom-nav">
          <Nav.Link href="/Barcelona" className='me-3 navbar-phone'>Barcelona</Nav.Link>
          <Nav.Link href="/Berlin" className='me-3 navbar-camera'>Berlin</Nav.Link>
          <Nav.Link href="/Bologna" className='me-3 navbar-phone'>Bologna</Nav.Link>
          <Nav.Link href="/Bronte" className='me-3 navbar-phone'>Bronte</Nav.Link>
          <Nav.Link href="/Catania" className='me-3 navbar-camera'>Catania</Nav.Link>
          <Nav.Link href="/Chicago" className='me-3 navbar-phone'>Chicago</Nav.Link>
          <Nav.Link href="/Columbus" className='me-3 navbar-phone'>Columbus</Nav.Link>
          <Nav.Link href="/Dresden" className='me-3 navbar-phone'>Dresden</Nav.Link>
          <Nav.Link href="/Dusseldorf" className='me-3 navbar-camera'>Düsseldorf</Nav.Link>
          <Nav.Link href="/Eibsee" className='me-3 navbar-phone'>Eibsee</Nav.Link>
          <Nav.Link href="/Erfurt" className='me-3 navbar-phone'>Erfurt</Nav.Link>
          <Nav.Link href="/Firenze" className='me-3 navbar-phone'>Firenze</Nav.Link>
          <Nav.Link href="/FL" className='me-3 navbar-phone'>Fort Lauderdale</Nav.Link>
          <Nav.Link href="/Hannover" className='me-3 navbar-phone'>Hannover</Nav.Link>
          <Nav.Link href="/Helsinki" className='me-3 navbar-phone'>Helsinki</Nav.Link>
          <Nav.Link href="/Houston" className='me-3 navbar-phone'>Houston</Nav.Link>
          <Nav.Link href="/Hudson" className='me-3 navbar-phone'>Hudson</Nav.Link>
          <Nav.Link href="/HK" className='me-3 navbar-phone'>Hong Kong</Nav.Link>
          <Nav.Link href="/Koln" className='me-3 navbar-camera'>Köln</Nav.Link>
          <Nav.Link href="/LA" className='me-3 navbar-phone'>Los Angeles</Nav.Link>
          <Nav.Link href="/Leipzig" className='me-3 navbar-phone'>Leipzig</Nav.Link>
          <Nav.Link href="/Livorno" className='me-3 navbar-phone'>Livorno</Nav.Link>
          <Nav.Link href="/Madison" className='me-3 navbar-phone'>Madison</Nav.Link>
          <Nav.Link href="/Munich" className='me-3 navbar-phone'>München</Nav.Link>
          <Nav.Link href="/Noto" className='me-3 navbar-camera'>Noto</Nav.Link>
          <Nav.Link href="/Nuremberg" className='me-3 navbar-phone'>Nürnberg</Nav.Link>
          <Nav.Link href="/NYC" className='me-3 navbar-phone'>New York City</Nav.Link>
          <Nav.Link href="/OSU" className='me-3 navbar-phone'>Ohio State</Nav.Link>
          <Nav.Link href="/Pisa" className='me-3 navbar-phone'>Pisa</Nav.Link>
          <Nav.Link href="/Potsdam" className='me-3 navbar-camera'>Potsdam</Nav.Link>
          <Nav.Link href="/Praha" className='me-3 navbar-camera'>Praha</Nav.Link>
          <Nav.Link href="/Ragusa" className='me-3 navbar-camera'>Ragusa</Nav.Link>
          <Nav.Link href="/Rostock" className='me-3 navbar-phone'>Rostock</Nav.Link>
          <Nav.Link href="/Siracusa" className='me-3 navbar-camera'>Siracusa</Nav.Link>
          <Nav.Link href="/Stuttgart" className='me-3 navbar-phone'>Stuttgart</Nav.Link>
          <Nav.Link href="/Tallinn" className='me-3 navbar-camera'>Tallinn</Nav.Link>
          <Nav.Link href="/Taormina" className='me-3 navbar-camera'>Taormina</Nav.Link>
          <Nav.Link href="/Ulm" className='me-3 navbar-phone'>Ulm</Nav.Link>
          <Nav.Link href="/Virginia" className='me-3 navbar-phone'>Virginia</Nav.Link>
          <Nav.Link href="/Wien" className='me-3 navbar-camera'>Wien</Nav.Link>
          <Nav.Link href="/Zollverein" className='me-3 navbar-camera'>Zollverein</Nav.Link>
          <Nav.Link href="/Zurich" className='me-3 navbar-phone'>Zürich</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Front_Navbar;