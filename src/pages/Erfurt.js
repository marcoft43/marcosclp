import '../App.css';

import Erfurt1 from '../assets/images/Erfurt.jpg';

const Erfurt = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={Erfurt1} alt="Erfurt" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Erfurt - Altstadt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Erfurt;