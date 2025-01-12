import '../App.css';

import ZurichLake from '../assets/images/Zurich.jpeg';

const Zurich = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={ZurichLake} alt="Zurick Lake" style={{width: '60%', height: 'auto'}}/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar polynesian-blue"></div>
            <span className="text">Zürich - Zürichsee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zurich;