import './index.css';
import Logo from './assets/backgrounds/logo.png';
import { useState, useEffect, ReactNode } from 'react';
import getToday from './utils/getCurrentDate';
import Header from './components/Header';
import Footer from './components/Footer';
import Signs from './components/Signs';
import Horoscope from './components/Horoscope';
import Galaxy from './assets/backgrounds/cosmos.jpg';

function Home() {
  const [aries, setAries] = useState<string | null>('');
  const [taurus, setTaurus] = useState<string | null>('');
  const [gemini, setGemini] = useState<string | null>('');
  const [cancer, setCancer] = useState<string | null>('');
  const [leo, setLeo] = useState<string | null>('');
  const [virgo, setVirgo] = useState<string | null>('');
  const [libra, setLibra] = useState<string | null>('');
  const [scorpio, setScorpio] = useState<string | null>('');
  const [sagittarius, setSagittarius] = useState<string | null>('');
  const [capricorn, setCapricorn] = useState<string | null>('');
  const [aquarius, setAquarius] = useState<string | null>('');
  const [pisces, setPisces] = useState<string | null>('');

  //Use a helper function to get the current date
  const date = getToday();

  //Fetch options for the API call
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  //Fetch Aries
  const getAries = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=aries&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('aries', data.description);
      setAries(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Taurus
  const getTaurus = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=taurus&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('taurus', data.description);
      setTaurus(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Gemini
  const getGemini = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=gemini&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('gemini', data.description);
      setGemini(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Cancer
  const getCancer = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=cancer&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('cancer', data.description);
      setCancer(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Leo
  const getLeo = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=leo&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('leo', data.description);
      setLeo(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Virgo
  const getVirgo = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=virgo&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('virgo', data.description);
      setVirgo(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Libra
  const getLibra = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=libra&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('libra', data.description);
      setLibra(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Scorpio
  const getScorpio = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=scorpio&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('scorpio', data.description);
      setScorpio(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Sagittarius
  const getSagittarius = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=sagittarius&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('sagittarius', data.description);
      setSagittarius(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Capricorn
  const getCapricorn = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=capricorn&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('capricorn', data.description);
      setCapricorn(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Aquarius
  const getAquarius = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=aquarius&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('aquarius', data.description);
      setAquarius(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Pisces
  const getPisces = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=pisces&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      localStorage.setItem('pisces', data.description);
      setPisces(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ///////////////////////Fetch Aries////////////////////////
    if (window.localStorage.getItem('aries') === null) {
      getAries();
    } else {
      setAries(window.localStorage.getItem('aries'));
    }
    ///////////////////////Fetch Taurus////////////////////////
    if (window.localStorage.getItem('taurus') === null) {
      getTaurus();
    } else {
      setTaurus(window.localStorage.getItem('taurus'));
    }
    ///////////////////////Fetch Gemini////////////////////////
    if (window.localStorage.getItem('gemini') === null) {
      getGemini();
    } else {
      setGemini(window.localStorage.getItem('gemini'));
    }
    ///////////////////////Fetch Cancer////////////////////////
    if (window.localStorage.getItem('cancer') === null) {
      getCancer();
    } else {
      setCancer(window.localStorage.getItem('cancer'));
    }
    ///////////////////////Fetch Leo////////////////////////
    if (window.localStorage.getItem('leo') === null) {
      getLeo();
    } else {
      setLeo(window.localStorage.getItem('leo'));
    }
    ///////////////////////Fetch Virgo////////////////////////
    if (window.localStorage.getItem('virgo') === null) {
      getVirgo();
    } else {
      setVirgo(window.localStorage.getItem('virgo'));
    }
    ///////////////////////Fetch Libra////////////////////////
    if (window.localStorage.getItem('libra') === null) {
      getLibra();
    } else {
      setLibra(window.localStorage.getItem('libra'));
    }
    ///////////////////////Fetch Scorpio////////////////////////
    if (window.localStorage.getItem('scorpio') === null) {
      getScorpio();
    } else {
      setScorpio(window.localStorage.getItem('scorpio'));
    }
    ///////////////////////Fetch Sagittarius////////////////////////
    if (window.localStorage.getItem('sagittarius') === null) {
      getSagittarius();
    } else {
      setSagittarius(window.localStorage.getItem('sagittarius'));
    }
    ///////////////////////Fetch Capricorn////////////////////////
    if (window.localStorage.getItem('capricorn') === null) {
      getCapricorn();
    } else {
      setCapricorn(window.localStorage.getItem('capricorn'));
    }
    ///////////////////////Fetch Aquarius////////////////////////
    if (window.localStorage.getItem('aquarius') === null) {
      getAquarius();
    } else {
      setAquarius(window.localStorage.getItem('aquarius'));
    }
    ///////////////////////Fetch Pisces////////////////////////
    if (window.localStorage.getItem('pisces') === null) {
      getPisces();
    } else {
      setPisces(window.localStorage.getItem('pisces'));
    }
  }, []);

  return (
    <>
      <Header
        isDarkBackground={true}
        image={Galaxy}
        header="What's your Zodiac Sign? Read Your Daily Horosope."
        subheader="Discover what your zodiac sign has in store for you today."
      />
      <Signs />
      <section className="mx-20 md:mx-60 my-4 ">
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
      <div className="mx-20 md:mx-60 my-6 grid grid-cols-1 gap-x-20 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
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
        <Horoscope children={aquarius} name="Aquarius" />
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
        <img src={Logo} alt="rising sign logo" />
      </section>
      <Footer />
      <div>hello world</div>
    </>
  );
}

export default Home;
