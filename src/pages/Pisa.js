import '../App.css';

import Pisa1 from '../assets/images/Pisa_1.jpg';
import Pisa2 from '../assets/images/Pisa_Sunset.jpg';

const Pisa = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Pisa1} alt="Pisa" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bright-yellow"></div>
            <span className="text">Pisa - Torre di Pisa</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Pisa2} alt="Pisa2" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Pisa - Sunset on the Arno River</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pisa;