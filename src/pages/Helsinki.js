import '../App.css';

import Helsinki1 from '../assets/images/Helsinki_Sunrise.jpg';
import Helsinki2 from '../assets/images/Helsinki_Street.jpg';

const Helsinki = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Helsinki1} alt="Helsinki Sunrise" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Helsinki - Sunrise on the Baltic Sea</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Helsinki2} alt="Helsinki Street" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Helsinki - Pohjoisesplanadi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helsinki;