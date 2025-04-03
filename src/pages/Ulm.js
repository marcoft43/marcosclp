import '../App.css';

import Ulm1 from '../assets/images/Ulm.jpg';

import Pictures_Navbar from '../components/pictures_navbar';

const Ulm = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
      <div className='centered-div'>
          <img src={Ulm1} alt="Ulm" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Ulm - Minster</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ulm;