import '../App.css';

import Leipzig1 from '../assets/images/Leipzig.jpg';

const Leipzig = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Leipzig1} alt="Leipzig" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Leipzig - Grimmaische Straße</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leipzig;