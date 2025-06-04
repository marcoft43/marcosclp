import '../App.css';

import Monaco1 from '../assets/images/Monaco_Port_at_Night.jpeg';
import Monaco2 from '../assets/images/Monaco_Casino_1.jpeg';
import Monaco3 from '../assets/images/Monaco_Road_Sign.jpeg';
import Monaco4 from '../assets/images/Monaco_Road.jpeg';
import Monaco5 from '../assets/images/Monaco_Road_2.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Monaco = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Monaco2} alt="Monaco" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar ochre"></div>
            <span className="text">Monaco - Monte Carlo Casino</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Monaco4} alt="Monaco" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar soft-coral"></div>
            <span className="text">Monaco - Rue Colonel Bellando de Castro</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Monaco5} alt="Monaco" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar soft-coral"></div>
            <span className="text">Monaco - Rue Basse</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Monaco3} alt="Monaco" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-red"></div>
            <span className="text">Monaco - Road Sign</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Monaco1} alt="Monaco" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cobalt-blue"></div>
            <span className="text">Monaco - Port Hercule</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monaco;