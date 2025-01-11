import '../App.css';

import PragueChurch from '../assets/images/Prague_Church_of_Our_Lady.jpeg';

const Prague = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={PragueChurch} alt="Prague Church" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Prague - Old Town Square</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prague;