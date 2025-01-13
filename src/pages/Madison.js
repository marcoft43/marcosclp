import '../App.css';

import Madison1 from '../assets/images/UWMadison.jpg';
import Madison2 from '../assets/images/Wisconsin_Capitol.jpg';

const Madison = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Madison1} alt="Madison" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Madison, WI - UW Madison Campus</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Madison2} alt="Madison" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Madison, WI - Wisconsin State Capitol</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Madison;