import '../App.css';

import CataniaEtnea from '../assets/images/Catania_Etnea.jpeg';
import CataniaStesicoro from '../assets/images/Catania_Stesicoro.jpeg';

const Catania = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={CataniaEtnea} alt="Catania Etnea" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Catania - Via Etnea</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaStesicoro} alt="Catania Stesicoro" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Catania - Piazza Stesicoro</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catania;