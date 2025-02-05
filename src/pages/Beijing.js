import '../App.css';

import Beijing1 from '../assets/images/Beijing_1.jpeg';

const Beijing = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Beijing1} alt="Beijing" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar burgundy-red"></div>
            <span className="text">Beijing - The Prayers Hall at the Heaven Temple</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beijing;