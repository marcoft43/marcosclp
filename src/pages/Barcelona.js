import '../App.css';

import Barcelona1 from '../assets/images/Barcelona_Barceloneta.jpg';
import Barcelona2 from '../assets/images/Barcelona_Eixample.jpg';

const Barcelona = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Barcelona1} alt="Barcelona Barceloneta" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar kepple"></div>
            <span className="text">Barcelona - Platja de la Barceloneta</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Barcelona2} alt="Barcelona Eixample" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar licorice"></div>
            <span className="text">Barcelona - L'Eixample</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barcelona;