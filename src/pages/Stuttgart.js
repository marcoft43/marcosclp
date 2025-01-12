import '../App.css';

import Stuttgart1 from '../assets/images/Stuttgart_1.jpg';
import Stuttgart2 from '../assets/images/Stuttgart.jpg';

const Stuttgart = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Stuttgart1} alt="Stuttgart" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar kepple"></div>
            <span className="text">Stuttgart - Schlossplatz</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Stuttgart2} alt="Stuttgart" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar keppke"></div>
            <span className="text">Stuttgart - Weinbau am Burgholzhof</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stuttgart;