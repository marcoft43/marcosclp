import '../App.css';

import Noto1 from '../assets/images/Noto_1.jpeg';
import Noto2 from '../assets/images/Noto_2.jpeg';
import NotoCar from '../assets/images/Noto_Car.jpg';

const Noto = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={Noto1} alt="Noto" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Noto - A street</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Noto2} alt="Noto" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Noto - A Caffè</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={NotoCar} alt="Noto" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Noto - A car</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noto;