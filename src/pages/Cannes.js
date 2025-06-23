import '../App.css';

import Cannes_1 from '../assets/images/Cannes.jpeg';
import Cannes_2 from '../assets/images/Cannes_2.jpeg';
import Cannes_3 from '../assets/images/Cannes_3.jpeg';
import Cannes_4 from '../assets/images/Cannes_4.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Cannes = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Cannes_1} alt="Cannes" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cobalt-blue"></div>
            <span className="text">Cannes - Hotel Carlton Cannes</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Cannes_2} alt="Cannes" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar verona-green"></div>
            <span className="text">Cannes - Rue Pasteur / Boulevard De La Croisette</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Cannes_3} alt="Cannes" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-yellow"></div>
            <span className="text">Cannes - Rue Félix Faure</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Cannes_4} alt="Cannes" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">Cannes - Rue Félix Faure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cannes;