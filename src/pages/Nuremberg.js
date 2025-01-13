import '../App.css';

import Nuremberg1 from '../assets/images/Nuremberg_1.jpg';
import Nuremberg2 from '../assets/images/Nuremberg_2.jpg';

const Nuremberg = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Nuremberg1} alt="Nuremberg" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Nürnberg - Handwerkerhof</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Nuremberg2} alt="Nuremberg" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar licorice"></div>
            <span className="text">Nürnberg - Kongresshalle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nuremberg;