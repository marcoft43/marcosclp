import '../App.css';

import Tallinn1 from '../assets/images/Tallinn_Toom_Ruutli.jpg';
import Tallinn2 from '../assets/images/Tallinn_Kohtu.jpg';
import TallinnK from '../assets/images/Tallinn_K.jpg';
import TallinnV from '../assets/images/Tallinn_V.jpg';

const Tallinn = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Tallinn1} alt="Tallinn Vanalinn" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Tallinn - Vanalinn, Toom-Rüütli</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Tallinn2} alt="Tallinn Vanalinn" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Tallinn - Vanalinn, Kohtu</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={TallinnK} alt="Tallinn" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">Tallinn - Komandandi Aed</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={TallinnV} alt="Tallinn" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">Tallinn - Viru Väravad</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tallinn;