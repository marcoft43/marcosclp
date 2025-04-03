import '../App.css';

import Erfurt1 from '../assets/images/Erfurt.jpg';

import Pictures_Navbar from '../components/pictures_navbar';

const Erfurt = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
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