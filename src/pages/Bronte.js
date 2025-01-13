import '../App.css';

import BronteEtna from '../assets/images/Bronte_Etna.jpg';
import BronteSunset from '../assets/images/Bronte_Sunset.jpg';

const Bronte = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={BronteEtna} alt="Bronte Etna" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Bronte - Etna</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={BronteSunset} alt="Bronte Sunset" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Bronte - Sunset</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bronte;