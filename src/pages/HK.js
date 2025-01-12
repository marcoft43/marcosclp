import '../App.css';

import HK1 from '../assets/images/HK_1.jpeg';
import HK2 from '../assets/images/HK_2.jpeg';

const HK = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={HK1} alt="HK" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bright-yellow"></div>
            <span className="text">Hong Kong - Yau Ma Tei 油麻地</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={HK2} alt="HK" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar klein-blue"></div>
            <span className="text">Hong Kong - Double-Decker Tram on Des Voeux Road 德輔道</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HK;