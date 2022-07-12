import Head from 'next/head';
import Image from 'next/image';
import logo from '../assets/PFP.svg';
import About from '../components/about';
import Banner from '../components/banner';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Header from '../components/header';
import Roadmap from '../components/roadmap';
import Subscribe from '../components/subscribe';
import Team from '../components/team';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Real Monsters by Katie Eary</title>
        <meta name="description" content="Real Monsters by Katie Eary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <About />
      <Roadmap />
      <Team />
      <Subscribe />
      <FAQ />
      <Footer />
    </div>
  );
}
