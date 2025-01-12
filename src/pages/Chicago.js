import '../App.css';

import Chicago1 from '../assets/images/Chicago_1.jpg';
import Chicago2 from '../assets/images/Chicago_2.jpg';
import Chicago3 from '../assets/images/Chicago_3.jpeg';

const Chicago = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Chicago1} alt="Chicago" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar kepple"></div>
            <span className="text">Chicago - View from DuSable Bridge</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Chicago2} alt="Chicago" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bordeaux-red"></div>
            <span className="text">Chicago - "The L" train on N Franklin Street</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Chicago3} alt="Chicago" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar licorice"></div>
            <span className="text">Chicago - View from above</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chicago;