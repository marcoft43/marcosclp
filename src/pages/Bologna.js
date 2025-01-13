import '../App.css';

import Bologna1 from '../assets/images/Bologna_1.jpg';
import Bologna2 from '../assets/images/Bologna_2.jpg';

const Bologna = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Bologna1} alt="Bologna" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Bologna - Torre degli Asinelli</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Bologna2} alt="Bologna" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bright-yellow"></div>
            <span className="text">Bologna - Via Pescherie Vecchie</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bologna;