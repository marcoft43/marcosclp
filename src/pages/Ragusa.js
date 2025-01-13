import '../App.css';

import Ragusa0 from '../assets/images/Ragusa.jpeg';
import Ragusa1 from '../assets/images/Ragusa_1.jpeg';
import Ragusa2 from '../assets/images/Ragusa_2.jpeg';

const Ragusa = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={Ragusa0} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar warm-red"></div>
            <span className="text">Ragusa - Un Posto che ho Dimenticato</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Ragusa1} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar blush-red"></div>
            <span className="text">Ragusa - Un Gatto</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Ragusa2} alt="Ragusa" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar light-gray-orange"></div>
            <span className="text">Ragusa - Una Chiesa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ragusa;