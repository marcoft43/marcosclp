import '../App.css';

import LA1 from '../assets/images/LA_1.jpg';

const LA = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={LA1} alt="LA" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Los Angeles - Sunset from Griffith Observatory</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LA;