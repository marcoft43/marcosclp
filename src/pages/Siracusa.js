import '../App.css';

import SiracusaNeapolis from '../assets/images/Siracusa_Neapolis.jpg';
import SiracusaManiace from '../assets/images/Siracusa_Maniace.jpeg'
import SiracusaAvola from '../assets/images/Siracusa_Avola.jpg'

const Siracusa = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={SiracusaNeapolis} alt="Siracusa Neapolis" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Siracusa - Neapolis</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={SiracusaAvola} alt="Siracusa Avola" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar deep-cyan"></div>
            <span className="text">Siracusa - Avola</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={SiracusaManiace} alt="Siracusa Maniace" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Siracusa - Castello Maniace</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Siracusa;