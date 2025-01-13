import '../App.css';

import Eibsee1 from '../assets/images/Eibsee.jpg';
import Eibsee2 from '../assets/images/Eibsee_2.jpg';

const Eibsee = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Eibsee1} alt="Eibsee" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar kepple"></div>
            <span className="text">Eibsee</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Eibsee2} alt="Eibsee" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar kepple"></div>
            <span className="text">Eibsee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eibsee;