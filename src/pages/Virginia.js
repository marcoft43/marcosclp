import '../App.css';

import Virginia1 from '../assets/images/Virginia_1.jpg';
import Virginia2 from '../assets/images/Virginia_2.jpg';

const Virginia = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Virginia1} alt="Virginia" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar warm-red"></div>
            <span className="text">Virginia - Jamestown English Settlement</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={Virginia2} alt="Virginia" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar kepple"></div>
            <span className="text">Virginia - Vineyard at Thomas Jefferson's Monticello</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Virginia;