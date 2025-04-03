import '../App.css';

import Dusseldorf1 from '../assets/images/Dusseldorf.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Dusseldorf = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Dusseldorf1} alt="Dusseldorf" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Düsseldorf - Sonnenuntergang am Rhein</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dusseldorf;