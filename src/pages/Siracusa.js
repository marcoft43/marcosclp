import '../App.css';

import SiracusaNeapolis from '../assets/images/Siracusa_Neapolis.jpg';
import SiracusaManiace from '../assets/images/Siracusa_Maniace.jpeg';
import SiracusaAvola from '../assets/images/Siracusa_Avola.jpg';
import SiracusaPiazza from '../assets/images/Siracusa_Piazza.jpeg';
import SiracusaCat from '../assets/images/Siracusa_Cat.jpeg';
import SiracusaShop from '../assets/images/Siracusa_Passeggio.jpeg';
import SiracusaSunset from '../assets/images/Siracusa_Sunset.jpeg';

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
          <img src={SiracusaPiazza} alt="Siracusa Piazza" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Siracusa - Piazza del Duomo</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={SiracusaCat} alt="Siracusa Cat" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">Siracusa - Cat on the Piazza</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={SiracusaShop} alt="Siracusa Shop" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar kepple"></div>
            <span className="text">Siracusa - Shop on Passeggio Foro Vittorio Emanuele II</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={SiracusaSunset} alt="Siracusa Sunset" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Siracusa - Sunset on the Ionian Sea</span>
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