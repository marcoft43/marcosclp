import '../App.css';

import OSU1 from '../assets/images/OSU_1.jpg';
import OSU2 from '../assets/images/OSU_Oval.jpg';
import OSU3 from '../assets/images/OSU_Hitchcock.jpg';
import OSU4 from '../assets/images/OSU_Dreese.jpg';
import OSU6 from '../assets/images/OSU_RPAC.jpg';
import OSU5 from '../assets/images/OSU_out.jpg';
import OSU7 from '../assets/images/OSU_Orton.jpg';
import OSU8 from '../assets/images/OSU_Oval_2.jpg';

const OSU = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU1} alt="OSU" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Ohio Stadium</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU8} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Oval</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU2} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Oval</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU3} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Hitchcock Hall</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU4} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Dreese Lab</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU6} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Gym RPAC</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU5} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar osu-scarlet"></div>
            <span className="text">Ohio State - Out-R-Inn</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='centered-div'>
          <img src={OSU7} alt="OSU" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Ohio State - Orton Hall</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OSU;