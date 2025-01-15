import '../App.css';

import Columbus1 from '../assets/images/Columbus_1.jpg';
import Columbus2 from '../assets/images/Columbus_2.jpg';
import Columbus3 from '../assets/images/Columbus_3.jpg';
import Columbus4 from '../assets/images/Columbus_4.jpg';
import Columbus5 from '../assets/images/Columbus_5.jpg';
import Columbus6 from '../assets/images/Columbus_6.jpg';
import Columbus7 from '../assets/images/Columbus_7.jpg';

const Columbus = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={Columbus1} alt="Columbus" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Columbus, OH - High & Patterson</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Columbus3} alt="Columbus" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Columbus, OH - High & Lane</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Columbus4} alt="Columbus" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Columbus, OH - Maynard</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Columbus6} alt="Columbus" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Columbus, OH - Maynard & Adams</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={Columbus7} alt="Columbus" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar sky-dancer-blue"></div>
            <span className="text">Columbus, OH - Adams & Blake</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Columbus;