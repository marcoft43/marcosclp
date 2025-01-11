import '../App.css';

import Tallinn1 from '../assets/images/Tallinn_Toom_Rüütli.jpg';
import Tallinn2 from '../assets/images/Tallinn_Kohtu.jpg';

const Tallinn = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Tallinn1} alt="Tallinn Vanalinn" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Tallinn - Vanalinn, Toom-Rüütli</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Tallinn2} alt="Wien Tram" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Tallinn - Vanalinn, Kohtu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tallinn;