import '../App.css';

import PragueChurch from '../assets/images/Prague_Church_of_Our_Lady.jpeg';
import PragueStreet from '../assets/images/Praha_Hastalsky.jpg';
import PragueBridge from '../assets/images/Praha_Mala_Strana.jpeg';
import PragueTram from '../assets/images/Praha_Karmelitska.jpg';

const Praha = () => {
  return(
    <div className="App">
      <div className='container'>
      <div className='centered-div'>
          <img src={PragueBridge} alt="Prague Bridge" style={{width: '90%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar licorice"></div>
            <span className="text">Praha - Malá Strana</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={PragueChurch} alt="Prague Church" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar prussia-blue"></div>
            <span className="text">Praha - Chrám Matky Boží před Týnem</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={PragueStreet} alt="Prague Hastalsky" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar polynesian-blue"></div>
            <span className="text">Praha - Haštalský Obvod</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={PragueTram} alt="Prague Karmelitská" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Praha - Karmelitská</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Praha;