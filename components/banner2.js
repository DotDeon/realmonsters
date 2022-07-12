import Image from 'next/image';
import logo from '../assets/logo.png';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import cloud3 from '../assets/cloud3.png';
import cloud4 from '../assets/cloud4.png';
import cloud5 from '../assets/cloud5.png';

function Banner2() {
  return (
    <div className="banner">
      <div className="clouds">
        <img src={cloud1} className="cloud1" />

        <Image src={cloud2} className="cloud2" />
        <Image src={cloud3} className="cloud3" />
      </div>
    </div>
  );
}

export default Banner2;
