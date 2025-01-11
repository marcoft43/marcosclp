import '../App.css';

import WienGraben from '../assets/images/Wien_Graben.jpeg';
import WienTram from '../assets/images/Wien_Tram.jpg';

const Wien = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={WienGraben} alt="WienGraben" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Wien - Graben</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={WienTram} alt="Wien Tram" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Wien - Eine Straßenbahn am Schwarzenbergplatz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wien;