import '../App.css';

import Zollverein1 from '../assets/images/Zollverein.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Zollverein = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Zollverein1} alt="Zollverein" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Zollverein - Doppelbock</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zollverein;