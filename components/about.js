import Image from "next/image";
import about from "../assets/about.png";

function About() {
  return (
    <div className=" flex flex-col justify-center mt-4 md:mt-0 bg-item2 bg-no-repeat bg-cover bg-gray-100">
      <div className="flex flex-col md:flex-row pb-8 md:mt-24 justify-evenly 2xl:justify-start ">
        <div className="hidden 2xl:flex relative flex-col items-left">
          <Image
            alt=""
            src={about}
            layout="fixed"
            objectFit="contain"
            width={750}
            height={750}
          />
        </div>
        <div className="hidden lg:flex 2xl:hidden relative flex-col items-left">
          <Image
            alt=""
            src={about}
            layout="fixed"
            objectFit="contain"
            width={650}
            height={650}
          />
        </div>
        <div className="flex flex-col justify-center md:-mt-24 md:items-start md:text-left md:ml-32">
          <p className=" text-Montserrat justify-center text-center text-3xl md:text-xl 2xl:text-4xl text-rm_blue">
            ABOUT
          </p>
          <p className="text-Montserrat text-3xl md:text-4xl 2xl:text-5xl text-center md:text-left md:tracking-wide text-bold text-black mt-3 md:mt-6">
            WHAT ARE REAL MONSTERS
          </p>
          <p className="text-grey500 text-Montserrat md:text-xl 2xl:text-2xl text-center md:text-left mt-6 md:mt-12 leading-relaxed font-normal md:px-0 px-10 md:w-5/6 2xl:pr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            eros tortor. Nunc faucibus mollis tortor, sed bibendum urna volutpat
            ut. Aenean dapibus, nunc vel feugiat laoreet, risus arcu pulvinar
            enim, sed euismod odio dui eu ipsum. Vestibulum elementum rutrum
            urna, in posuere ante ullamcorper ac. Integer rutrum venenatis odio
            et imperdiet. Nullam hendrerit aliquam dapibus. Curabitur eget
            accumsan tellus. Duis lacus orci, consectetur sed est eu, vulputate
            dictum erat. Etiam sit amet consectetur risus. Ut eu nunc hendrerit,
            fermentum ligula non, scelerisque neque. Vestibulum cursus commodo
            ligula sit amet cursus. Maecenas velit elit, pellentesque ac ligula
            in, vulputate aliquet nisl. Aenean sit amet rutrum mauris. Phasellus
            interdum maximus suscipit. Vestibulum hendrerit aliquet magna sit
            amet pretium.
          </p>
          <div className="lg:hidden hidden md:flex relative flex-col justify-center items-center">
            {/* <Image
              alt=""
              src={about}
              layout="fixed"
              objectFit="contain"
              width={550}
              height={550}
            /> */}
          </div>
          <div className="md:hidden flex relative flex-col items-center">
            {/* <Image
              alt=""
              src={about}
              layout="fixed"
              objectFit="contain"
              width={350}
              height={350}
            /> */}
          </div>
          {/* <div className="flex items-center justify-center lg:justify-start mt-6 lg:mt-16 md:pb-10 lg:mb-0"> */}
          {/* {blockchain.account === "" || blockchain.smartContract === null ? ( */}
          {/* <p */}
          {/* className="inline-flex cursor-pointer text-xs md:text-base hover:text-white text-fblue bg-fyellow rounded-full px-2 md:px-12 py-2 mt-2" */}
          {/* onClick={(e) => { */}
          {/* e.preventDefault(); */}
          {/* dispatch(connect()); */}
          {/* }} */}
          {/* > */}
          {/* Connect Wallet */}
          {/* </p> */}
          {/* ) : ( */}
          {/* <p
              className="inline-flex cursor-pointer font-bold font-Montserrat text-xl 2xl:text-2xl text-black bg-gray-100 rounded-full px-8 py-4 2xl:px-12 2xl:py-6 md:ml-40 lg:ml-0"
              //   onClick={() => setScroll(1)}
            >
              Buy a Monster
            </p> */}
          {/* <div className="inline-flex justify-center items-center bg-red-900 cursor-pointer font-bold font-Montserrat text-xl 2xl:text-2xl text-black rounded-full px-8 py-4 2xl:px-12 2xl:py-6 md:ml-40 lg:ml-0"> */}
          <div className="flex items-center justify-center bg-gray-100 mt-6">
            <button className="flex items-center h-16 px-8 text-gray-500 transition duration-200 bg-gray-100 rounded-lg btn-light focus:outline-none">
              <span>Buy a realMonster</span>
            </button>
          </div>
          {/* </div> */}
          {/* )} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
