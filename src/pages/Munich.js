import '../App.css';

import MunichSendlingerTor from '../assets/images/Munich_SendlingerTor.jpg';
import MunichMarienPlatz from '../assets/images/Munich_MarienPlatz.jpg'
import MunichIsar from '../assets/images/Munich_Isar.jpg';
import MunichCarino from '../assets/images/Munich_Carino.jpg';
import MunichNeuperlach from '../assets/images/Munich_Neuperlach.jpg';
import MunichSchwabing from '../assets/images/Munich_Schwabing.jpg';
import MunichOlympiapark from '../assets/images/Munich_Olympiapark.jpg';

const Munich = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={MunichSendlingerTor} alt="Munich Sendlinger Tor" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar burgundy-red"></div>
            <span className="text">München - Sendlinger Tor</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichIsar} alt="Munich Isar" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar polynesian-blue"></div>
            <span className="text">München - Isar</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichOlympiapark} alt="Munich Olympiapark" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar polynesian-blue"></div>
            <span className="text">München - Olympiapark</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichNeuperlach} alt="Munich Neuperlach" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar kepple"></div>
            <span className="text">München - Neuperlach</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichMarienPlatz} alt="Munich Marienplatz" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">München - Marienplatz</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichSchwabing} alt="Munich Schwabing" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar french-rose"></div>
            <span className="text">München - Schwabing</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={MunichCarino} alt="Munich Carino" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bright-yellow"></div>
            <span className="text">München - Piccolo Carino in Grünwald</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Munich;