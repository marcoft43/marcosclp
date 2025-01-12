import '../App.css';

import OSU1 from '../assets/images/Columbus_1.jpg';
import OSU2 from '../assets/images/OSU_Oval.jpg';
import OSU3 from '../assets/images/OSU_Hitchcock.jpg';
import OSU4 from '../assets/images/OSU_Dreese.jpg';
import OSU5 from '../assets/images/OSU_out.jpg';

const Columbus = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU1} alt="Columbus" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Ohio Stadium</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU2} alt="Houston" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Oval</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU3} alt="Houston" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - School of Engineering at Hitchcock Hall</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU4} alt="Houston" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - School of Computer Science at Dreese Lab</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU5} alt="Houston" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Out-R-Inn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Columbus;