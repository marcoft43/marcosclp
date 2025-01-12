import '../App.css';

import BronteEtna from '../assets/images/Bronte_Etna.jpg';

const Bronte = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={BronteEtna} alt="Bronte Etna" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Bronte - Etna</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bronte;