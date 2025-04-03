import '../App.css';

import Dresden1 from '../assets/images/Dresden.jpg';

import Pictures_Navbar from '../components/pictures_navbar';

const Dresden = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Dresden1} alt="Dresden" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Dresden - Bistum Dresden-Meißen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dresden;