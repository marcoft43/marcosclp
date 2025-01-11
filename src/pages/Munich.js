import '../App.css';

import MunichSendlingerTor from '../assets/images/Munich_SendlingerTor.jpg';
import MunichMarienPlatz from '../assets/images/Munich_MarienPlatz.jpg'
import MunichIsar from '../assets/images/Munich_Isar.jpg';

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
          <img src={MunichIsar} alt="Munich Isar" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar polynesian-blue"></div>
            <span className="text">München - Isar</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichMarienPlatz} alt="Munich Marien Platz" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">München - Marienplatz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Munich;