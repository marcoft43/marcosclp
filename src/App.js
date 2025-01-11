import logo from './logo.svg';
import './App.css';
import { Stack } from 'react-bootstrap';

import CataniaEtnea from './assets/images/Catania_Etnea.jpeg';
import CataniaStesicoro from './assets/images/Catania_Stesicoro.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Eine Besondere Vergänglichkeit</h2>
      </header>
      
      <div className='container'>
        <div className='centered-div'>
          <img src={CataniaEtnea} alt="Catania Etnea" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar-vertical">
            <div className="color-bar-orange-dynamite"></div>
            <span className="text">Catania - Via Etnea</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaStesicoro} alt="Catania Stesicoro" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar-horizontal">
            <div className="color-bar-klein-blue"></div>
            <span className="text">Catania - Piazza Stesicoro</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
