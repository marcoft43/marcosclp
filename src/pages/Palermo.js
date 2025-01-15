import '../App.css';

import Palermo1 from '../assets/images/Palermo1.jpg';

const Palermo = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Palermo1} alt="Palermo" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Palermo - Prima Circoscrizione</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Palermo;