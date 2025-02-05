import '../App.css';

import Wuhan1 from '../assets/images/Wuhan_1.jpeg';

const Wuhan = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Wuhan1} alt="Wuhan" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Wuhan - Hankow Jianghan Rd</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wuhan;