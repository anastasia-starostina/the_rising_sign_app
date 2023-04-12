import './index.css';
import Logo from './assets/backgrounds/logo.png';
import { useState, useEffect } from 'react';
import backupData from './data/backUpData';
import getToday from './utils/getCurrentDate';
import Header from './components/Header';
import Footer from './components/Footer';
import Signs from './components/Signs';
import Horoscope from './components/Horoscope';
import Galaxy from './assets/backgrounds/cosmos2.jpg';

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
  console.log(`Current date: ${date}`);

  //Fetch options for the API call
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
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
      //Save the data to local storage
      localStorage.setItem('aries', data.description);
      //Save the date timestamp to local storage
      localStorage.setItem('ariesDate', date);
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
      localStorage.setItem('taurusDate', date);
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
      localStorage.setItem('geminiDate', date);
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
      localStorage.setItem('cancerDate', date);
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
      localStorage.setItem('leoDate', date);
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
      localStorage.setItem('virgoDate', date);
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
      localStorage.setItem('libraDate', date);
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
      localStorage.setItem('scorpioDate', date);
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
      localStorage.setItem('sagittariusDate', date);
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
      localStorage.setItem('capricornDate', date);
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
      localStorage.setItem('aqauriusDate', date);
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
      localStorage.setItem('piscesDate', date);
      setPisces(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //Check if the timestamp for each zodiac sign is the same as the current date

    ///////////////////////Fetch Aries////////////////////////
    if (window.localStorage.getItem('ariesDate') !== date) {
      getAries();
    } else {
      setAries(window.localStorage.getItem('aries'));
    }

    ///////////////////////Fetch Taurus////////////////////////
    if (window.localStorage.getItem('taurusDate') !== date) {
      getTaurus();
    } else {
      setTaurus(window.localStorage.getItem('taurus'));
    }
    ///////////////////////Fetch Gemini////////////////////////
    if (window.localStorage.getItem('geminiDate') !== date) {
      getGemini();
    } else {
      setGemini(window.localStorage.getItem('gemini'));
    }
    ///////////////////////Fetch Cancer////////////////////////
    if (window.localStorage.getItem('cancerDate') !== date) {
      getCancer();
    } else {
      setCancer(window.localStorage.getItem('cancer'));
    }
    ///////////////////////Fetch Leo////////////////////////
    if (window.localStorage.getItem('leoDate') !== date) {
      getLeo();
    } else {
      setLeo(window.localStorage.getItem('leo'));
    }
    ///////////////////////Fetch Virgo////////////////////////
    if (window.localStorage.getItem('virgoDate') !== date) {
      getVirgo();
    } else {
      setVirgo(window.localStorage.getItem('virgo'));
    }
    ///////////////////////Fetch Libra////////////////////////
    if (window.localStorage.getItem('libraDate') !== date) {
      getLibra();
    } else {
      setLibra(window.localStorage.getItem('libra'));
    }
    ///////////////////////Fetch Scorpio////////////////////////
    if (window.localStorage.getItem('scorpioDate') !== date) {
      getScorpio();
    } else {
      setScorpio(window.localStorage.getItem('scorpio'));
    }
    ///////////////////////Fetch Sagittarius////////////////////////
    if (window.localStorage.getItem('sagittariusDate') !== date) {
      getSagittarius();
    } else {
      setSagittarius(window.localStorage.getItem('sagittarius'));
    }
    ///////////////////////Fetch Capricorn////////////////////////
    if (window.localStorage.getItem('capricornDate') !== date) {
      getCapricorn();
    } else {
      setCapricorn(window.localStorage.getItem('capricorn'));
    }
    ///////////////////////Fetch Aquarius////////////////////////
    if (window.localStorage.getItem('aquariusDate') !== date) {
      getAquarius();
    } else {
      setAquarius(window.localStorage.getItem('aquarius'));
    }
    ///////////////////////Fetch Pisces////////////////////////
    if (window.localStorage.getItem('piscesDate') !== date) {
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
      <section className="mx-5 md:mx-40 my-4 ">
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
      <div className="mx-5 md:mx-40 my-6 grid grid-cols-1 gap-x-20 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
        {/*If API responds with error, return backup horoscope data */}
        <Horoscope children={aries || backupData[0].description} name="Aries" />
        <Horoscope
          children={taurus || backupData[1].description}
          name="Taurus"
        />
        <Horoscope
          children={gemini || backupData[2].description}
          name="Gemini"
        />
        <Horoscope
          children={cancer || backupData[3].description}
          name="Cancer"
        />
        <Horoscope children={leo || backupData[4].description} name="Leo" />
        <Horoscope children={virgo || backupData[5].description} name="Virgo" />
        <Horoscope children={libra || backupData[6].description} name="Libra" />
        <Horoscope
          children={scorpio || backupData[7].description}
          name="Scoprio"
        />
        <Horoscope
          children={sagittarius || backupData[8].description}
          name="Sagittarius"
        />
        <Horoscope
          children={capricorn || backupData[9].description}
          name="Capricorn"
        />
        <Horoscope
          children={aquarius || backupData[10].description}
          name="Aquarius"
        />
        <Horoscope
          children={pisces || backupData[11].description}
          name="Pisces"
        />
      </div>
      <section className="mx-5 md:mx-40 my-5">
        <h1 className="text-lg py-3 mb-3 md:text-2xl font-bold tracking-wide">
          Support Us on Patreon
        </h1>
        <h3>
          If you enjoy our free daily horoscopes, please consider supporting
          this project on{' '}
          <a
            className="text-indigo-500"
            href="https://www.patreon.com/AnastasiaDEV"
            target="_blank"
          >
            Patreon.
          </a>
        </h3>
        <img src={Logo} alt="rising sign logo" />
      </section>
      <Footer />
    </>
  );
}

export default Home;
