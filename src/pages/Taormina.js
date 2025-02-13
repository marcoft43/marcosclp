import '../App.css';

import Taormina1 from '../assets/images/Taormina_1.jpeg';
import Taormina2 from '../assets/images/Taormina_2.jpeg';
import Taormina3 from '../assets/images/Taormina_3.jpeg';
import Taormina4 from '../assets/images/Taormina_4.jpeg';
import Taormina5 from '../assets/images/Taormina_5.jpeg';
import Taormina6 from '../assets/images/Taormina_6.jpg';

const Taormina = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Taormina1} alt="Taormina" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Taormina - Teatro Greco</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Taormina6} alt="Taormina" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Taormina - Grotta dell'amore</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Taormina5} alt="Taormina" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar light-coral"></div>
            <span className="text">Taormina - Piazza Giuseppe Buciunì</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Taormina3} alt="Taormina" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar light-coral"></div>
            <span className="text">Taormina - Sunset</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Taormina2} alt="Taormina" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar warm-red"></div>
            <span className="text">Taormina - Porta Messina</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Taormina4} alt="Taormina" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Taormina - Piazza IX Aprile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taormina;