import '../App.css';

import Houston1 from '../assets/images/Houston_1.jpg';
import Houston2 from '../assets/images/Houston_2.jpg';

const Houston = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Houston1} alt="Houston" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar licorice"></div>
            <span className="text">Houston - Main Street</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={Houston2} alt="Houston" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Houston - NASA Johnson Space Center</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Houston;