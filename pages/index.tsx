import Header from './components/Header';
import Presale from './components/Presale';
import About from './components/About';
import HowTo from './components/HowTo';
import Roadmap from './components/Roadmap';
import Token from './components/Token';
import Gallery from './components/Gallery';
import Claim from './components/Claim';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
  <>
    <div className='bg-[#04011C]'>
      <Header></Header>
      <Presale></Presale>
      <About></About>
      <HowTo></HowTo>
      <Roadmap></Roadmap>
      <Token></Token>
      <Gallery></Gallery>
      <Claim></Claim>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </>
  );
}
