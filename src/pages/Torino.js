import '../App.css';

import Torino_1 from '../assets/images/Torino_1.jpeg';
import Torino_2 from '../assets/images/Torino_2.jpeg';
import Torino_3 from '../assets/images/Torino_3.jpeg';
import Torino_4 from '../assets/images/Torino_4.jpeg';
import Torino_5 from '../assets/images/Torino_5.jpeg';
import Torino_6 from '../assets/images/Torino_6.jpeg';
import Torino_7 from '../assets/images/Torino_7.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Torino = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Torino_1} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar lavender"></div>
            <span className="text">Torino - Piazza Castello / Via Roma</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Torino_2} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar lavender"></div>
            <span className="text">Torino - Piazza Castello</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Torino_3} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-yellow"></div>
            <span className="text">Torino - Via Maria Adelaide</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Torino_4} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-yellow"></div>
            <span className="text">Torino - Via Pietro Micca</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Torino_6} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-yellow"></div>
            <span className="text">Torino - Via Po</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Torino_5} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cool-grey"></div>
            <span className="text">Torino - Fontana del Po</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Torino_7} alt="Torino" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cobalt-blue"></div>
            <span className="text">Torino - Parco del Valentino</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Torino;