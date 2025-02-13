import '../App.css';

import CataniaEtnea from '../assets/images/Catania_Etnea.jpeg';
import CataniaStesicoro from '../assets/images/Catania_Stesicoro.jpeg';
import CataniaLido from '../assets/images/Catania_Capannine.jpg';
import CataniaGiuliano from '../assets/images/Catania_Giuliano.jpeg';
import CataniaGaribaldi from '../assets/images/Catania_Garibaldi.jpeg';
import CataniaVermut from '../assets/images/Catania_Vermut.jpg';
import CataniaPescheria from '../assets/images/Catania_Pescheria.jpeg';

const Catania = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={CataniaGiuliano} alt="Catania Lido" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Catania - View from Chiesa di San Giuliano</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaStesicoro} alt="Catania Stesicoro" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Catania - Piazza Stesicoro</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaEtnea} alt="Catania Etnea" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Catania - Via Etnea</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaLido} alt="Catania Lido" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar klein-blue"></div>
            <span className="text">Catania - Lido Le Capannine</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaGaribaldi} alt="Catania Garibaldi" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Catania - Via Garibaldi</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaVermut} alt="Catania Vermut" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Catania - A wine bar</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={CataniaPescheria} alt="Catania Pescheria" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar raspberry-red"></div>
            <span className="text">Catania - Pescheria di Catania</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catania;