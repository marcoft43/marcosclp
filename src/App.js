import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front_Navbar from './components/Navbar';
import Barcelona from './pages/Barcelona';
import Berlin from "./pages/Berlin";
import Bologna from './pages/Bologna';
import Bronte from './pages/Bronte';
import Catania from "./pages/Catania";
import Chicago from './pages/Chicago';
import Columbus from './pages/Columbus';
import Dresden from './pages/Dresden';
import Dusseldorf from './pages/Dusseldorf';
import Eibsee from './pages/Eibsee';
import Erfurt from './pages/Erfurt';
import Firenze from './pages/Firenze';
import FL from './pages/Fort_Laudedale';
import Hannover from './pages/Hannover';
import Helsinki from './pages/Helsinki';
import Houston from './pages/Houston';
import Hudson from './pages/Hudson';
import HK from './pages/HK';
import Koln from './pages/Koln';
import LA from './pages/LA';
import Leipzig from './pages/Leipzig';
import Livorno from './pages/Livorno';
import Madison from './pages/Madison';
import Munich from './pages/Munich';
import Noto from './pages/Noto';
import Nuremberg from './pages/Nuremberg';
import NYC from './pages/NYC';
import OSU from './pages/OSU';
import Palermo from './pages/Palermo';
import Pisa from './pages/Pisa';
import Potsdam from './pages/Potsdam';
import Praha from './pages/Prague';
import Ragusa from './pages/Ragusa';
import Rostock from './pages/Rostock';
import Siracusa from './pages/Siracusa';
import Stuttgart from './pages/Stuttgart';
import Tallinn from './pages/Tallinn';
import Taormina from './pages/Taormina';
import Ulm from './pages/Ulm';
import Virginia from './pages/Virginia';
import Wien from './pages/Wien';
import Zollverein from './pages/Zollverein';
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
          <Route path='/Bologna' element={<Bologna />}/>
        </Routes>
        <Routes>
          <Route path='/Bronte' element={<Bronte />}/>
        </Routes>
        <Routes>
          <Route path='/Catania' element={<Catania />}/>
        </Routes>
        <Routes>
          <Route path='/Chicago' element={<Chicago />}/>
        </Routes>
        <Routes>
          <Route path='/Columbus' element={<Columbus />}/>
        </Routes>
        <Routes>
          <Route path='/Dresden' element={<Dresden />}/>
        </Routes>
        <Routes>
          <Route path='/Dusseldorf' element={<Dusseldorf />}/>
        </Routes>
        <Routes>
          <Route path='/Eibsee' element={<Eibsee />}/>
        </Routes>
        <Routes>
          <Route path='/Erfurt' element={<Erfurt />}/>
        </Routes>
        <Routes>
          <Route path='/Firenze' element={<Firenze />}/>
        </Routes>
        <Routes>
          <Route path='/FL' element={<FL />}/>
        </Routes>
        <Routes>
          <Route path='/Hannover' element={<Hannover />}/>
        </Routes>
        <Routes>
          <Route path='/Helsinki' element={<Helsinki />}/>
        </Routes>
        <Routes>
          <Route path='/Houston' element={<Houston />}/>
        </Routes>
        <Routes>
          <Route path='/Hudson' element={<Hudson />}/>
        </Routes>
        <Routes>
          <Route path='/HK' element={<HK />}/>
        </Routes>
        <Routes>
          <Route path='/Koln' element={<Koln />}/>
        </Routes>
        <Routes>
          <Route path='/LA' element={<LA />}/>
        </Routes>
        <Routes>
          <Route path='/Leipzig' element={<Leipzig />}/>
        </Routes>
        <Routes>
          <Route path='/Livorno' element={<Livorno />}/>
        </Routes>
        <Routes>
          <Route path='/Madison' element={<Madison />}/>
        </Routes>
        <Routes>
          <Route path='/Munich' element={<Munich />}/>
        </Routes>
        <Routes>
          <Route path='/Noto' element={<Noto />}/>
        </Routes>
        <Routes>
          <Route path='/Nuremberg' element={<Nuremberg />}/>
        </Routes>
        <Routes>
          <Route path='/NYC' element={<NYC />}/>
        </Routes>
        <Routes>
          <Route path='/OSU' element={<OSU />}/>
        </Routes>
        <Routes>
          <Route path='/Palermo' element={<Palermo />}/>
        </Routes>
        <Routes>
          <Route path='/Pisa' element={<Pisa />}/>
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
          <Route path='/Rostock' element={<Rostock />}/>
        </Routes>
        <Routes>
          <Route path='/Siracusa' element={<Siracusa />}/>
        </Routes>
        <Routes>
          <Route path='/Stuttgart' element={<Stuttgart />}/>
        </Routes>
        <Routes>
          <Route path='/Tallinn' element={<Tallinn />}/>
        </Routes>
        <Routes>
          <Route path='/Taormina' element={<Taormina />}/>
        </Routes>
        <Routes>
          <Route path='/Ulm' element={<Ulm />}/>
        </Routes>
        <Routes>
          <Route path='/Virginia' element={<Virginia />}/>
        </Routes>
        <Routes>
          <Route path='/Wien' element={<Wien />}/>
        </Routes>
        <Routes>
          <Route path='/Zollverein' element={<Zollverein />}/>
        </Routes>
        <Routes>
          <Route path='/Zurich' element={<Zurich />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
