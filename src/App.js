import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front_Navbar from './components/Navbar';
import Berlin from "./pages/Berlin";
import Catania from "./pages/Catania";
import Dusseldorf from './pages/Dusseldorf';
import Firenze from './pages/Firenze';
import Koln from './pages/Koln';
import Munich from './pages/Munich';
import Potsdam from './pages/Potsdam';
import Praha from './pages/Prague';
import Tallinn from './pages/Tallinn';
import Wien from './pages/Wien';

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
          <Route path='/Berlin' element={<Berlin />}/>
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
          <Route path='/Koln' element={<Koln />}/>
        </Routes>
        <Routes>
          <Route path='/Munich' element={<Munich />}/>
        </Routes>
        <Routes>
          <Route path='/Potsdam' element={<Potsdam />}/>
        </Routes>
        <Routes>
          <Route path='/Praha' element={<Praha />}/>
        </Routes>
        <Routes>
          <Route path='/Tallinn' element={<Tallinn />}/>
        </Routes>
        <Routes>
          <Route path='/Wien' element={<Wien />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
