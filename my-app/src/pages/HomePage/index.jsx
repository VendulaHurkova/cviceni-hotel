import './style.css';
import { Baner } from '../components/Baner';
import { VyberPokoju } from '../components/VyberPokoju';
import { Rezervace } from '../components/Rezervace';
import { Footer } from '../components/Footer';


export const HomePage = () => {
  return (
    <>
      <Baner />
      <VyberPokoju />
      <Rezervace />
      <Footer />
    </>
  );
};
