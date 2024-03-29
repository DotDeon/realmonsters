/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";
import cloud4 from "../assets/cloud4.png";
import cloud5 from "../assets/cloud5.png";
import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="h-[400px] md:h-[600px] 2xl:h-[700px] bg-rm_blue overflow-hidden items-end ">
      <div className="top-4 text-center justify-center items-center flex flex-col">
        <div className="w-5/6 md:w-2/3 2xl:w-1/3 mt-12 2xl:mt-32">
          <Image src={logo} layout="responsive" />
        </div>
        <p className="text-white 2xl:mt-0 md:-mt-14 mt-10 text-sm 2xl:text-lg font-semibold 2xl:font-bold font-Thasadith">
          1000 Real World NFTs. Collect your Real Monsters with RealMonseterNFT
        </p>
        <button className="flex z-50 items-center justify-center h-12 2xl:h-16 px-6 2xl:px-8 text-green-100 transition duration-200 bg-rm_blue rounded-lg btn-green focus:outline-none mt-4">
          <span className="text-white text-lg font-bold">Connect Wallet</span>
        </button>
      </div>
      <div className="relative h-full w-screen mx-0 px-0 -mt-6 md:-mt-52 2xl:-mt-72">
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
      </div>
    </div>
  );
}

export default Banner;
