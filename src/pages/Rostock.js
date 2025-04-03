import '../App.css';

import Rostock1 from '../assets/images/Rostock.jpg';

import Pictures_Navbar from '../components/pictures_navbar';

const Rostock = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Rostock1} alt="Rostock" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar klein-blue"></div>
            <span className="text">Rostock - Seebad Warnemünde</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rostock;