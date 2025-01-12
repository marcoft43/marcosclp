import '../App.css';

import Noto1 from '../assets/images/Noto_1.jpeg';
import Noto2 from '../assets/images/Noto_2.jpeg';

const Noto = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={Noto1} alt="Noto" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Noto - Una Strada</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Noto2} alt="Ragusa" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Ragusa - Un Caffè</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noto;