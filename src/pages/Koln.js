import '../App.css';

import Koln1 from '../assets/images/Koln_Dom.jpeg';
import Koln2 from '../assets/images/Koln_Dom_Nacht.jpeg';

const Koln = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Koln1} alt="Kölner Dom" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar warm-red"></div>
            <span className="text">Köln - Kölner Dom am Tag</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Koln2} alt="Firenze David" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">Köln - Kölner Dom in der Nacht</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Koln;