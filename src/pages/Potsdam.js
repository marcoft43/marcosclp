import '../App.css';

import Potsdam1 from '../assets/images/Potsdam_Sanssouci.jpg';
import Potsdam2 from '../assets/images/Potsdam_Orangerieschloss.jpeg';

const Potsdam = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Potsdam1} alt="Potsdam Sanssouci" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar kepple"></div>
            <span className="text">Potsdam - Schloss Sanssouci</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Potsdam2} alt="Potsdam Orangerieschloss" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar licorice"></div>
            <span className="text">Potsdam - Orangerieschloss</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Potsdam;