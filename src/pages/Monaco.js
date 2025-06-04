import '../App.css';

import Monaco1 from '../assets/images/Monaco_Port_at_Night.jpeg';

import Pictures_Navbar from '../components/pictures_navbar';

const Monaco = () => {
  return(
    <div className="App">
      <Pictures_Navbar></Pictures_Navbar>
      <div className='container'>
        <div className='centered-div'>
          <img src={Monaco1} alt="Monaco" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar cobalt-blue"></div>
            <span className="text">Monaco - Port Hercule</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monaco;