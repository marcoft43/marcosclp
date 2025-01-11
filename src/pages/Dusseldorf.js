import '../App.css';

import Dusseldorf1 from '../assets/images/Dusseldorf.jpeg';

const Dusseldorf = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Dusseldorf1} alt="Dusseldorf" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Düsseldorf - Sonnenuntergang am Rhein</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dusseldorf;