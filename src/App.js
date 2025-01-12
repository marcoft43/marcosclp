import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front_Navbar from './components/Navbar';
import Barcelona from './pages/Barcelona';
import Berlin from "./pages/Berlin";
import Bronte from './pages/Bronte';
import Catania from "./pages/Catania";
import Dusseldorf from './pages/Dusseldorf';
import Firenze from './pages/Firenze';
import Helsinki from './pages/Helsinki';
import Koln from './pages/Koln';
import Munich from './pages/Munich';
import Noto from './pages/Noto';
import Potsdam from './pages/Potsdam';
import Praha from './pages/Prague';
import Ragusa from './pages/Ragusa';
import Siracusa from './pages/Siracusa';
import Tallinn from './pages/Tallinn';
import Taormina from './pages/Taormina';
import Wien from './pages/Wien';
import Zurich from './pages/Zurich';

import './App.css';

const App = () => {
  return (
    <Router>
      <header className="App-header">
        <h2>Eine Besondere Vergänglichkeit</h2>
      </header>
      <Front_Navbar />
      <div>
        <Routes>
          <Route path='/Barcelona' element={<Barcelona />}/>
        </Routes>
        <Routes>
          <Route path='/Berlin' element={<Berlin />}/>
        </Routes>
        <Routes>
          <Route path='/Bronte' element={<Bronte />}/>
        </Routes>
        <Routes>
          <Route path='/Catania' element={<Catania />}/>
        </Routes>
        <Routes>
          <Route path='/Dusseldorf' element={<Dusseldorf />}/>
        </Routes>
        <Routes>
          <Route path='/Firenze' element={<Firenze />}/>
        </Routes>
        <Routes>
          <Route path='/Helsinki' element={<Helsinki />}/>
        </Routes>
        <Routes>
          <Route path='/Koln' element={<Koln />}/>
        </Routes>
        <Routes>
          <Route path='/Munich' element={<Munich />}/>
        </Routes>
        <Routes>
          <Route path='/Noto' element={<Noto />}/>
        </Routes>
        <Routes>
          <Route path='/Potsdam' element={<Potsdam />}/>
        </Routes>
        <Routes>
          <Route path='/Praha' element={<Praha />}/>
        </Routes>
        <Routes>
          <Route path='/Ragusa' element={<Ragusa />}/>
        </Routes>
        <Routes>
          <Route path='/Siracusa' element={<Siracusa />}/>
        </Routes>
        <Routes>
          <Route path='/Tallinn' element={<Tallinn />}/>
        </Routes>
        <Routes>
          <Route path='/Taormina' element={<Taormina />}/>
        </Routes>
        <Routes>
          <Route path='/Wien' element={<Wien />}/>
        </Routes>
        <Routes>
          <Route path='/Zurich' element={<Zurich />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
