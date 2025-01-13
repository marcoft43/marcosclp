import '../App.css';

import Hudson1 from '../assets/images/Hudson.jpg';

const Hudson = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Hudson1} alt="Hudson" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar kepple"></div>
            <span className="text">Hudson, OH - Waterfall in Cuyahoga Valley National Park</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hudson;