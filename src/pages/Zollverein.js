import '../App.css';

import Zollverein1 from '../assets/images/Zollverein.jpeg';

const Zollverein = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Zollverein1} alt="Zollverein" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Zollverein - Doppelbock</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zollverein;