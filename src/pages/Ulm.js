import '../App.css';

import Ulm1 from '../assets/images/Ulm.jpg';

const Ulm = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={Ulm1} alt="Ulm" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Ulm - Minster</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ulm;