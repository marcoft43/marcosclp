import '../App.css';

import Milan_1 from '../assets/images/Milan_1.jpeg';
import Milan_2 from '../assets/images/Milan_2.jpeg';
import Milan_3 from '../assets/images/Milan_3.jpeg';
import Milan_4 from '../assets/images/Milan_4.jpeg';
import Milan_5 from '../assets/images/Milan_5.jpeg';
import Milan_6 from '../assets/images/Milan_6.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Milano = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Milan_1} alt="Milano" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-yellow"></div>
            <span className="text">Milano - Galleria Vittorio Emanuele II</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Milan_2} alt="Milano" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-red"></div>
            <span className="text">Minalo - Piazza Castello Cairoli</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Milan_3} alt="Milano" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar french-vermilion"></div>
            <span className="text">Minalo - Castello Sforzesco</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Milan_4} alt="Milano" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cadmium-yellow"></div>
            <span className="text">Minalo - UniCredit</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Milan_6} alt="Milano" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cool-grey"></div>
            <span className="text">Minalo - Corso Buenos Aires</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Milan_5} alt="Milano" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cool-grey"></div>
            <span className="text">Minalo - Napoleone del Canova</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milano;