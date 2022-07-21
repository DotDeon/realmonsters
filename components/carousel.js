import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import slider1 from '../assets/media/2.png';
import slider2 from '../assets/media/2.png';
import slider3 from '../assets/media/3.png';
import slider4 from '../assets/media/4.png';
import slider5 from '../assets/media/5.png';
import slider6 from '../assets/media/6.png';
import slider7 from '../assets/media/7.png';
import slider8 from '../assets/media/8.png';
import slider9 from '../assets/media/9.png';
import slider10 from '../assets/media/10.png';
import slider11 from '../assets/media/1.png';
import slider12 from '../assets/media/2.png';
import slider13 from '../assets/media/3.png';
import slider14 from '../assets/media/4.png';
import slider15 from '../assets/media/5.png';
import slider16 from '../assets/media/6.png';

import slider17 from '../assets/media/7.png';
import slider18 from '../assets/media/8.png';
import slider24 from '../assets/media/9.png';
import slider20 from '../assets/media/10.png';
import slider21 from '../assets/media/1.png';
import slider22 from '../assets/media/2.png';
import slider23 from '../assets/media/3.png';
import slider19 from '../assets/media/4.png';
import slider25 from '../assets/media/5.png';
import slider26 from '../assets/media/6.png';
import slider27 from '../assets/media/7.png';
import slider28 from '../assets/media/8.png';
import slider34 from '../assets/media/9.png';
import slider30 from '../assets/media/10.png';
import slider31 from '../assets/media/1.png';
import slider32 from '../assets/media/2.png';
import slider33 from '../assets/media/3.png';
import slider29 from '../assets/media/4.png';
import slider35 from '../assets/media/5.png';
import slider36 from '../assets/media/6.png';

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      // aligns the first slide to the start
      // of the viewport else will align it to the middle.

      loop: true,
      // we need the carousel to loop to the
      // first slide once it reaches the last slide.

      skipSnaps: false,
      // Allow the carousel to skip scroll snaps if
      // it's dragged vigorously.

      // inViewThreshold: 0.7,
      // percentage of a slide that need's to be visible
      // inorder to be considered in view, 0.7 is 70%.
      slidesToScroll: 1,
    },
    [Autoplay()]
  );
  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    {
      direction: 'rtl',
      align: 'start',
      // aligns the first slide to the start
      // of the viewport else will align it to the middle.

      loop: true,
      // we need the carousel to loop to the
      // first slide once it reaches the last slide.

      skipSnaps: false,
      // Allow the carousel to skip scroll snaps if
      // it's dragged vigorously.

      // inViewThreshold: 0.7,
      // percentage of a slide that need's to be visible
      // inorder to be considered in view, 0.7 is 70%.
      slidesToScroll: 1,
    },
    [Autoplay()]
  );
  return (
    <div className="SFSliders w-screen h-32 flex flex-row">
      <div className="SFSlider1">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider2}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider3}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider4}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider5}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider6}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider7}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider8}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider9}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider10}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider11}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider12}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider13}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider14}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider15}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider16}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider17}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider18}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="SFSlider2 clear-both block">
        <div className="embla" ref={emblaRef2} dir="rtl">
          <div className="embla__container">
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider19}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider20}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider21}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider22}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider23}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider24}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider25}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider26}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider27}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider28}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider29}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider30}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider31}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider32}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider33}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider34}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                layout="responsive"
                src={slider35}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="embla__slide__img"
                src={slider36}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmblaCarousel;
