import logo from './logo.svg';
import './App.css';
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>I see that it is by no means useless to travel, if a man wants to see something new.</h4>
      </header>
      
      <div className='container'>
        <div className='centered-div'>
          <img src="./Catania_Etnea.jpeg" alt="Catania Etnea" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar">
            <div className="color-bar-orange-dynamite"></div>
            <span className="text">Catania - Via Etnea</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
