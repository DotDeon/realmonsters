import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import j1 from '../assets/media/1.png';
import j10 from '../assets/media/10.png';
import j2 from '../assets/media/2.png';
import j3 from '../assets/media/3.png';
import j4 from '../assets/media/4.png';
import j5 from '../assets/media/5.png';
import j6 from '../assets/media/6.png';
import j7 from '../assets/media/7.png';
import j8 from '../assets/media/8.png';
import j9 from '../assets/media/9.png';
import About from '../components/about';
import Banner from '../components/banner';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Header from '../components/header';
import Roadmap from '../components/roadmap';
import Team from '../components/team';

export default function Home() {
  const sectionRef = useRef(null);
  const section = sectionRef.current;

  const [position, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const update = () => {
    const newPos = window.pageYOffset;

    const diff = newPos - position;
    const speed = diff * 0.01;

    sectionRef.current.style.transform = `skewY(${speed}deg)`;

    setScrollPosition(newPos);

    requestAnimationFrame(update);
  };

  useEffect(() => {
    setTimeout(() => {
      update();
    }, 100);
  }, [position]);

  useEffect(() => {
    update();
  }, []);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Real Monsters by Katie Eary</title>
        <meta name="description" content="Real Monsters by Katie Eary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section ref={sectionRef}>
        <div>
          <Header />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <About />
        </div>

        {/* Strip */}
        <div className="grid grid-cols-2 md:grid-cols-9">
          <Image src={j1} alt="" objectFit="fill" />
          <Image src={j2} alt="" objectFit="fill" />
          <Image src={j3} alt="" objectFit="fill" />
          <Image src={j4} alt="" objectFit="fill" />
          <Image src={j5} alt="" objectFit="fill" />
          <Image src={j6} alt="" objectFit="fill" />
          <Image src={j7} alt="" objectFit="fill" />
          <Image src={j8} alt="" objectFit="fill" />
          <div className="hidden md:flex">
            <Image src={j9} alt="" objectFit="fill" />
          </div>
        </div>
        <div>
          <Roadmap />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-9">
          <Image src={j10} alt="" objectFit="fill" />
          <Image src={j1} alt="" objectFit="fill" />
          <Image src={j2} alt="" objectFit="fill" />
          <Image src={j3} alt="" objectFit="fill" />
          <Image src={j8} alt="" objectFit="fill" />
          <Image src={j5} alt="" objectFit="fill" />
          <Image src={j6} alt="" objectFit="fill" />
          <Image src={j7} alt="" objectFit="fill" />
          <div className="hidden md:flex">
            <Image src={j4} alt="" objectFit="fill" />
          </div>
        </div>
        <div>
          <Team />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-9">
          <Image src={j1} alt="" objectFit="fill" />
          <Image src={j2} alt="" objectFit="fill" />
          <Image src={j3} alt="" objectFit="fill" />
          <Image src={j4} alt="" objectFit="fill" />
          <Image src={j5} alt="" objectFit="fill" />
          <Image src={j6} alt="" objectFit="fill" />
          <Image src={j7} alt="" objectFit="fill" />
          <Image src={j8} alt="" objectFit="fill" />
          <div className="hidden md:flex">
            <Image src={j9} alt="" objectFit="fill" />
          </div>
        </div>
        <div>
          <FAQ />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
}
