import './index.css';
import Logo from './assets/backgrounds/logo.png';
import { useState, useEffect, ReactNode} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Signs from './components/Signs';
import Horoscope from './components/Horoscope';

function Home(){
  const [horoscopes, setHoroscopes] = useState();
  const [aries, setAries] = useState('');
  const [taurus, setTaurus] = useState('');
  const [gemini, setGemini] = useState('');
  const [cancer, setCancer] = useState('');
  const [leo, setLeo] = useState('');
  const [virgo, setVirgo] = useState('');
  const [libra, setLibra] = useState('');
  const [scorpio, setScorpio] = useState('');
  const [sagittarius, setSagittarius] = useState('');
  const [capricorn, setCapricorn] = useState('');
  const [aquarius, setAquarius] = useState('');
  const [pisces, setPisces] = useState('');

  useEffect(() => {
    //Fetch Aries
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=aries&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setAries(json.description);
      });
    //Fetch Taurus
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=taurus&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setTaurus(json.description);
      });
    //Fetch Gemini
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=gemini&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setGemini(json.description);
      });
    //Fetch Cancer
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=cancer&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setCancer(json.description);
      });
    //Fetch Leo
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=leo&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setLeo(json.description);
      });

    //Fetch Virgo
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=virgo&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setVirgo(json.description);
      });
    //Fetch Libra
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=libra&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setLibra(json.description);
      });
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=scorpio&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setScorpio(json.description);
      });
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=sagittarius&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setSagittarius(json.description);
      });
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=capricorn&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setCapricorn(json.description);
      });
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=aquarius&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setAquarius(json.description);
      });
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=pisces&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setPisces(json.description);
      });
  }, []);

  return (
    <>
      <Header />
      <Signs />
      <section className="mx-20 md:mx-40 my-4 ">
        <h1 className="text-lg py-3 mb-3 md:text-2xl font-bold tracking-wide hover:text-indigo-600">
          Free Horoscopes for Every Star Sign
        </h1>
        <p className=" text-base leading-7 tracking-wide md:text-xl">
          What does the future have in store for you? From Aries to Pisces, our
          free daily horoscopes will help you understand your relationships and
          purpose. No day is the same, and your horoscope today will differ from
          your horoscope tomorrow. With our free horoscopes, you can be sure
          you'll get your regular astrological insights by learning what's in
          the stars.
        </p>
      </section>
      <div className="mx-20 md:mx-40 my-6 grid grid-cols-1 gap-x-20 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
        <Horoscope children={aries} name="Aries" />
        <Horoscope children={taurus} name="Taurus" />
        <Horoscope children={gemini} name="Gemini" />
        <Horoscope children={cancer} name="Cancer" />
        <Horoscope children={leo} name="Leo" />
        <Horoscope children={virgo} name="Virgo" />
        <Horoscope children={libra} name="Libra" />
        <Horoscope children={scorpio} name="Scoprio" />
        <Horoscope children={sagittarius} name="Sagittarius" />
        <Horoscope children={capricorn} name="Capricorn" />
        <Horoscope children={pisces} name="Pisces" />
      </div>
      <section className="mx-20 md:mx-40 my-5">
        <h1 className="text-lg py-3 mb-3 md:text-2xl font-bold tracking-wide">
          Support Us on Patreon
        </h1>
        <h3>
          If you enjoy our free daily horoscopes, please consider supporting
          this project on{' '}
          <a className="text-indigo-500" href="">
            Patreon.
          </a>
        </h3>
        <img src={Logo} alt="rising sign logo"/>
      </section>
      <Footer />
      <div>hello world</div>
    </>
  );
}

export default Home;
