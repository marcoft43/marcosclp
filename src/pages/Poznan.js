import '../App.css';
import '../Color_Lab.css';

import Poznan1 from '../assets/images/Poznan_1.jpeg';
import Poznan2 from '../assets/images/Poznan_2.jpeg';
import Poznan3 from '../assets/images/Poznan_3.jpeg';
import Poznan4 from '../assets/images/Poznan_4.jpeg';
import Poznan5 from '../assets/images/Poznan_5.jpeg';
import Poznan6 from '../assets/images/Poznan_6.jpeg';

const Poznan = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Poznan1} alt="Poznan" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar emerald"></div>
            <span className="text">Poznań - Muzeum Historii Miasta Poznania</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Poznan2} alt="Poznan" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar emerald"></div>
            <span className="text">Poznań - Merchants' Houses</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Poznan5} alt="Poznan" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cool-grey"></div>
            <span className="text">Poznań - Fontanna Neptuna w Poznaniu</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Poznan3} alt="Poznan" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-red"></div>
            <span className="text">Poznań - Grilled cheese on the market</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Poznan4} alt="Poznan" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar muted-red"></div>
            <span className="text">Poznań - Bread</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Poznan6} alt="Poznan" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar ivory"></div>
            <span className="text">Poznań - Dolls</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poznan;