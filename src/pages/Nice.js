import '../App.css';

import Antibes1 from '../assets/images/Antibes_1.jpeg';
import Cannes from '../assets/images/Cannes.jpeg';
import Menton from '../assets/images/Menton.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Nice = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Antibes1} alt="Antibes" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cobalt-blue"></div>
            <span className="text">Antibes - Castle</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Cannes} alt="Cannes" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cobalt-blue"></div>
            <span className="text">Cannes - Hotel Carlton Cannes</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Menton} alt="Menton" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar french-vermilion"></div>
            <span className="text">Menton - Coast</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nice;