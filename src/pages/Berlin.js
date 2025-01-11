import '../App.css';

import BerlinWannsee from '../assets/images/Berlin_Wannsee.jpg';
import BerlinFox from '../assets/images/Berlin_Fox.jpg';

const Berlin = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={BerlinWannsee} alt="Berlin Wannsee" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Berlin - Großer Wannsee</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={BerlinFox} alt="Berlin Fox" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar warm-red"></div>
            <span className="text">Berlin - Ein Fuchs am See</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berlin;