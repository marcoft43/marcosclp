import '../App.css';

import Dresden2 from '../assets/images/Dresden_2.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Dresden = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Dresden2} alt="Dresden" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Dresden - Fürstenzug</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dresden;