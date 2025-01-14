import '../App.css';

import BerlinWannsee from '../assets/images/Berlin_Wannsee.jpg';
import BerlinFox from '../assets/images/Berlin_Fox.jpg';
import BerlinKudamm from '../assets/images/Berlin_Kudamm.jpeg';
import BerlinBrandenburgTor from '../assets/images/Berlin_Brandenburg_Tor.jpeg';
import BerlinKreuzberg from '../assets/images/Berlin_Kreuzberg.jpg';
import BerlinMuseumsinsel from '../assets/images/Berlin_Museumsinsel.jpeg';

const Berlin = () => {
  return(
    <div className="App">
      <div className='container'>
        <div className='centered-div'>
          <img src={BerlinKudamm} alt="Berlin Kudamm" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar bright-yellow"></div>
            <span className="text">Berlin - Kurfürstendamm</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={BerlinBrandenburgTor} alt="Berlin Brandenburg" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar dark-pastel-orange"></div>
            <span className="text">Berlin - Brandenburg Tor</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={BerlinKreuzberg} alt="Berlin Kreuzberg" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar bordeaux-red"></div>
            <span className="text">Berlin - Kreuzberg</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={BerlinMuseumsinsel} alt="Berlin Museumsinsel" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar bright-yellow"></div>
            <span className="text">Berlin - U-Bahnhof Museumsinsel</span>
          </div>
          <p style={{justifyContent: 'left', fontSize: '2vmin'}}>Themed after stage set for <em>The Magic Flute</em> in Vienna by Karl Friedrich Schinkel</p>
        </div>
        <div className='centered-div'>
          <img src={BerlinWannsee} alt="Berlin Wannsee" style={{width: '90%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-5">
            <div className="color-bar orange-dynamite"></div>
            <span className="text">Berlin - Großer Wannsee</span>
          </div>
        </div>
        <div className='centered-div'>
          <img src={BerlinFox} alt="Berlin Fox" style={{width: '60%', height: 'auto'}} className="responsive-img"/>
          <div className="text-with-bar padding-left-20">
            <div className="color-bar warm-red"></div>
            <span className="text">Berlin - A fox</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berlin;