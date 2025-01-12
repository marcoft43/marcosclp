import '../App.css';

import Hannover1 from '../assets/images/Hannover.jpg';
import Hannover2 from '../assets/images/Hannover_Kropcke.jpg';

const Hannover = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Hannover1} alt="Hannover" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar pumpkin-orange"></div>
            <span className="text">Hannover - Marktkirche</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Hannover2} alt="Hannover" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar phthalo-green"></div>
            <span className="text">Hannover - Kröpcke</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hannover;