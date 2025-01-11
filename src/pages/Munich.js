import '../App.css';

import MunichSendlingerTor from '../assets/images/Munich_SendlingerTor.jpg';
import MunichStarnbergsee from '../assets/images/Munich_Starnbergsee.jpg';
import MunichMarienPlatz from '../assets/images/Munich_MarienPlatz.jpg'

const Munich = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={MunichSendlingerTor} alt="Munich Sendlinger Tor" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar burgundy-red"></div>
            <span className="text">München - Sendlinger Tor</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichStarnbergsee} alt="Munich Starnbergsee" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bice-blue"></div>
            <span className="text">München - Starnberger See</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichMarienPlatz} alt="Munich Marien Platz" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar licorice"></div>
            <span className="text">München - Marienplatz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Munich;