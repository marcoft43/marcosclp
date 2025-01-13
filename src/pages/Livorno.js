import '../App.css';

import Livorno1 from '../assets/images/Livorno_1.jpg';
import Livorno2 from '../assets/images/Livorno_2.jpg';

const Livorno = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Livorno1} alt="Livorno" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Livorno - Street Market on Via del Cardinale</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Livorno2} alt="Livorno" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Livorno - View of Mediterranean from Terrazza Mascagni</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livorno;