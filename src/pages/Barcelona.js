import '../App.css';

import Barcelona1 from '../assets/images/Barcelona_Barceloneta.jpg';
import Barcelona2 from '../assets/images/Barcelona_Eixample.jpg';
import Barcelona3 from '../assets/images/Barcelona_Xurro.jpg';

const Barcelona = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Barcelona1} alt="Barcelona Barceloneta" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar french-rose"></div>
            <span className="text">Barcelona - Sunrise at Platja de la Barceloneta</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Barcelona2} alt="Barcelona Eixample" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar french-rose"></div>
            <span className="text">Barcelona - L'Eixample</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Barcelona3} alt="Barcelona Xurro" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar bordeaux-red"></div>
            <span className="text">Barcelona - El Xurro</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barcelona;