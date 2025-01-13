import '../App.css';

import NYC1 from '../assets/images/NYC_1.jpeg';
import NYC2 from '../assets/images/NYC_2.jpeg';

const NYC = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={NYC1} alt="NYC" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar aero-blue"></div>
            <span className="text">New York City - View from Hudson River</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={NYC2} alt="NYC" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar burgundy-red"></div>
            <span className="text">New York City - Times Square</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NYC;