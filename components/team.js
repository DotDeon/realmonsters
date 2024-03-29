import Image from "next/image";
import about from "../assets/katie.jpg";
// import { menuState1 } from '../atoms/navAtoms';
// import { useRecoilState } from 'recoil';

function Team() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          {/* <!-- Meet the Team --> */}
          <div className="max-w-7xl px-4">
            {/* <!-- Section Header --> */}
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                {/* <!-- Header --> */}
                <div className="flex flex-col justify-center items-center md:text-left">
                  <p className="justify-center text-center text-lg 2xl:text-3xl text-rm_blue font-Thasadith">
                    WHO IS
                  </p>
                  <p className="font-Rancho justify-center text-center text-4xl 2xl:text-6xl">
                    KATIE EARY
                  </p>
                </div>
                {/* <div className="flex relative flex-col items-left"> */}
                <Image
                  alt=""
                  src={about}
                  layout="fixed"
                  objectFit="contain"
                  width={330}
                  height={250}
                  className="rounded-6xl shadow-md"
                />
                {/* </div> */}
                {/* <!-- Description --> */}
              </div>
              <p className="text-grey500 md:text-xl 2xl:text-2xl text-center w-full px-10 2xl:px-32 mt-6 md:mt-12 leading-relaxed font-normal font-Thasadith">
                Graduating from the Royal Academy in 2008, Eary’s subsequent
                winning of Newgen collections and collaboration with Kanye West
                launched her onto the world’s stage. Katie has collaborated with
                the likes of IKEA, YEEZY, Pretty Green, River Island, Samsung,
                KFC, Burger King, SPLIFFY, Cartoon network (to name a few),
                Eary’s universe is expanding, Like the underground movements
                that continue to inform her work, so Katie Eary rises up to face
                the challenges of the future. Taking cue from Irvine Welsh and
                William Burroughs, Eary’s collections are created In the spirit
                of disobedience. But this is protest, not chaos. Eary takes from
                the lords and gives to the revolutionaries in unabashed print
                and colour - collections that draw on the Acid House scene,
                cybergoths, shufflers, and seditionaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
