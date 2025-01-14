import '../App.css';

import Ragusa0 from '../assets/images/Ragusa.jpeg';
import Ragusa1 from '../assets/images/Ragusa_1.jpeg';
import Ragusa2 from '../assets/images/Ragusa_2.jpeg';
import Ragusa3 from '../assets/images/Ragusa_3.jpeg';
import Ragusa4 from '../assets/images/Ragusa_4.jpeg';
import RagusaCat from '../assets/images/Ragusa_Cat.jpeg';
import RagusaCattedrale from '../assets/images/Ragusa_Cattedrale.jpeg';

const Ragusa = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={Ragusa0} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar warm-red"></div>
            <span className="text">Ragusa - A street</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={RagusaCat} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar light-gray-orange"></div>
            <span className="text">Ragusa - A cat</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Ragusa1} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar blush-red"></div>
            <span className="text">Ragusa - Two cats</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Ragusa3} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar light-gray-orange"></div>
            <span className="text">Ragusa - Piazza Duomo</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Ragusa4} alt="Ragusa" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Ragusa - Duomo di San Giorgio</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Ragusa2} alt="Ragusa" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar light-gray-orange"></div>
            <span className="text">Ragusa - Duomo di San Giorgio</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={RagusaCattedrale} alt="Ragusa" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Ragusa - Cattedrale di San Giovanni Battista</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ragusa;