/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import logo from '../assets/logo.png';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import cloud3 from '../assets/cloud3.png';
import cloud4 from '../assets/cloud4.png';
import cloud5 from '../assets/cloud5.png';

function Banner() {
  return (
    <div className="h-[700px] bg-rm_blue overflow-hidden">
      <div className="top-4 text-center justify-center items-center flex flex-col">
        <Image src={logo} layout="fixed" width={825} height={364} />

        <p className="text-white text-lg font-bold">
          1000 Real World NFTs. Collect your Real Monsters with RealMonseterNFT
        </p>
        <button className="flex z-50 items-center justify-center h-16 px-8 text-green-100 transition duration-200 bg-rm_blue rounded-lg btn-green focus:outline-none mt-4">
          <span className="text-white text-lg font-bold">Connect Wallet</span>
        </button>
      </div>
      <div className="relative top-0 h-full w-screen mx-0 px-0 -mt-72">
        <div className="z-0 absolute">
          <Image src={cloud1} className="animate-clouds1" />
        </div>
        <div className="z-10 absolute">
          <Image src={cloud2} className="animate-clouds2" />
        </div>
        <div className="z-20 absolute">
          <Image src={cloud5} className="animate-clouds3" />
        </div>
        <div className="z-20 absolute">
          <Image src={cloud4} className="animate-clouds4" />
        </div>
        <div className="z-20 absolute">
          <Image src={cloud3} className="animate-clouds5" />
        </div>
        {/* <Image
            src={cloud2}
            className="animate-cloud2 absolute bottom-2 max-w-full"
          />
          <Image
            src={cloud3}
            className="animate-cloud3 absolute bottom-2 max-w-full"
          />
          <Image
            src={cloud4}
            className="animate-cloud4 absolute bottom-2 max-w-full"
          />
          <Image
            src={cloud5}
            className="animate-cloud5 absolute bottom-2 max-w-full"
          /> */}
      </div>
    </div>
  );
}

export default Banner;
