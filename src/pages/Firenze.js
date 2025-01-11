import '../App.css';

import Firenze1 from '../assets/images/Firenze_Duomo.jpg';
import Firenze2 from '../assets/images/Firenze_David.jpg';

const Firenze = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Firenze1} alt="Firenze Duomo" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar light-coral"></div>
            <span className="text">Firenze - Duomo</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Firenze2} alt="Firenze David" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar light-gray-orange"></div>
            <span className="text">Firenze - David</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firenze;