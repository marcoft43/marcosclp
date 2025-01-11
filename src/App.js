import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front_Navbar from './components/Navbar';
import Catania from "./pages/Catania";
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
          <Route path='/Catania' element={<Catania />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
