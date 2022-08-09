import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

function About() {
  const [activeSlide, setActiiveSlide] = useState(1);

  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);

  return (
    <div className="relative h-[30vh] w-screen bg-rm_yellow">
      <div className="flex flex-col justify-center items-center pt-10">
        <p className="font-Rancho justify-center text-center text-3xl 2xl:text-6xl text-rm_blue">
          Who are The Monsters by Katie Eary
        </p>
      </div>
      <div className="slide-container mt-10">
        <div className="slide" pos="1">
          <div className="slide-1">
            <div className="vertical-line"></div>
            <Transition
              show={true}
              enter="transform transition ease-in-out duration-1000"
              enterFrom="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="transform transition ease-in-out duration-1000"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-full"
            >
              {activeSlide === 1 && (
                <p className="text-center font-Thasadith text-xl">
                  A bestiary (actual term for collective of monsters) created by
                  Katie Eary. They linger in the most festering parts of London
                  that are no longer frequented. There are 10 types of Monster;
                  1000 unique variations and 50 truly rotten examples. Each
                  Monster is available to buy as an NFT and will also arrive at
                  your home as a figurine. They are a limited edition unique
                  piece by Katie Eary and will not be reproduced.
                </p>
              )}
              {activeSlide === 2 && (
                <p className="text-center font-Thasadith text-xl">
                  Katie Eary is a female British designer, well established in
                  the world of fashion and on the catwalk. Creating major
                  celebrity collections for the likes of Kanye West, Katie is a
                  visionary in the real world.
                </p>
              )}
              {activeSlide === 3 && (
                <p className="text-center font-Thasadith text-xl">
                  As a designer, Katie started playing with a concept to create
                  a physical being and this creation took the form of a monster
                  made from silicone. The use of material and colour was
                  paramount to the designs but Katie wanted to materialise this
                  concept of owning a Monster and involve a community to collect
                  and trade them.
                </p>
              )}
              {activeSlide === 4 && (
                <p className="text-center font-Thasadith text-xl">
                  The monsters are a tangible representation of strong female
                  led ideology, being created by Katie who built her brand from
                  the ground to its current status. The ethos is that women can
                  create anything imaginable from very little, and what better
                  way to promote this than by owning a monster in both the
                  digital and physical world. With every Monster NFT you buy,
                  you will receive the exact monster in physical in figurine
                  collectible form, delivered directly to your address. This
                  unique artwork made by Katie will be recognised as a
                  collectible and no further reproductions will be made by Katie
                  Eary.
                </p>
              )}
              {activeSlide === 5 && (
                <p className="text-center font-Thasadith text-xl">
                  Female NFT artists account for a very small percentage of NFT
                  sales worldwide; Katies vision is an excellent introduction to
                  their workings and services, but there are many to empower
                  women by allowing the ownership and trading of her Monster
                  creations, creating wealth for underprivileged women from all
                  backgrounds and allowing the benefit from each Monster value
                  as it rises after mint.
                </p>
              )}
              {activeSlide === 6 && (
                <p className="text-center font-Thasadith text-xl">
                  With this in mind, Katie has branded 5 of the 1000 unique
                  physical monster collectibles with a QR code that will award
                  the owner 5ETH each and a total of 50 out of the 1000 are
                  classed as rare special edition and are bare the mark of the
                  gold grime.
                </p>
              )}
            </Transition>
            <div className="vertical-line"></div>
          </div>
        </div>
        <div className="slide-toggle-container">
          <svg
            className="slide-toggle"
            direction="prev"
            height="50"
            width="50"
            onClick={() => {
              let prev = activeSlide - 1;
              if (prev === 0) {
                setActiiveSlide(6);
              } else {
                setActiiveSlide(prev);
              }
            }}
          >
            <polyline className="chevron" points="0,50 25,38 50,50" />
            Sorry, your browser does not support inline SVG.
          </svg>
          <svg
            className="slide-toggle"
            direction="next"
            height="50"
            width="50"
            onClick={() => {
              let next = activeSlide + 1;
              if (next <= 6) {
                setActiiveSlide(next);
              } else {
                setActiiveSlide(1);
              }
            }}
          >
            <polyline className="chevron" points="0,0 25,12 50,0" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="index">
          <p>{activeSlide}/7</p>
        </div>
      </div>
    </div>
  );
}

export default About;
