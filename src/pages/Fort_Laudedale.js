import '../App.css';

import FL1 from '../assets/images/FL.jpg';

const FL = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={FL1} alt="FL" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar deep-cyan"></div>
            <span className="text">Fort Lauderdale - Lauderdale-By-The-Sea Beach</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FL;