import Footer from '../components/Footer';
import Header from '../components/Header';
import HoroscopeImage from '../assets/backgrounds/celestial.jpg';
import Horoscope from '../components/Horoscope';
import { useEffect, useState } from 'react';
import getTomorrow from '../utils/getTomorrow';
import getYesterday from '../utils/getYesterday';

function Horoscopes() {
  const [day, setDay] = useState('today');
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
  const [ariesYesterday, setAriesYesterday] = useState<string | null>('');
  const [taurusYesterday, setTaurusYesterday] = useState<string | null>('');
  const [geminiYesterday, setGeminiYesterday] = useState<string | null>('');
  const [cancerYesterday, setCancerYesterday] = useState<string | null>('');
  const [leoYesterday, setLeoYesterday] = useState<string | null>('');
  const [virgoYesterday, setVirgoYesterday] = useState<string | null>('');
  const [libraYesterday, setLibraYesterday] = useState<string | null>('');
  const [scorpioYesterday, setScorpioYesterday] = useState<string | null>('');
  const [sagittariusYesterday, setSagittariusYesterday] = useState<
    string | null
  >('');
  const [capricornYesterday, setCapricornYesterday] = useState<string | null>(
    ''
  );
  const [aquariusYesterday, setAquariusYesterday] = useState<string | null>('');
  const [piscesYesterday, setPiscesYesterday] = useState<string | null>('');

  //Use a helper function to get the tomorrow's date
  const date = getTomorrow();
  //Use a helper function to get the yesdterday's date
  const yesterday = getYesterday();

  //Fetch options for the API call
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  //Fetch Aries
  const getAriesTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=aries&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setAries(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Taurus
  const getTaurusTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=taurus&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setTaurus(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Gemini
  const getGeminiTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=gemini&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setGemini(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Cancer
  const getCancerTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=cancer&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setCancer(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Leo
  const getLeoTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=leo&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setLeo(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Virgo
  const getVirgoTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=virgo&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setVirgo(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Libra
  const getLibraTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=libra&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setLibra(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Scorpio
  const getScorpioTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=scorpio&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setScorpio(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Sagittarius
  const getSagittariusTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=sagittarius&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setSagittarius(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Capricorn
  const getCapricornTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=capricorn&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setCapricorn(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Aquarius
  const getAquariusTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=aquarius&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setAquarius(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Pisces
  const getPiscesTomorrow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=pisces&date=${date}`,
        fetchOptions
      );
      const data = await response.json();
      setPisces(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };

  //Fetch Aries
  const getAriesYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=aries&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setAriesYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Taurus
  const getTaurusYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=taurus&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setTaurusYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Gemini
  const getGeminiYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=gemini&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setGeminiYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Cancer
  const getCancerYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=cancer&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setCancerYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Leo
  const getLeoYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=leo&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setLeoYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Virgo
  const getVirgoYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=virgo&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setVirgoYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Libra
  const getLibraYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=libra&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setLibraYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Scorpio
  const getScorpioYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=scorpio&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setScorpioYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Sagittarius
  const getSagittariusYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=sagittarius&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setSagittariusYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Capricorn
  const getCapricornYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=capricorn&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setCapricornYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Aquarius
  const getAquariusYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=aquarius&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setAquariusYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };
  //Fetch Pisces
  const getPiscesYesterday = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}&sign=pisces&date=${yesterday}`,
        fetchOptions
      );
      const data = await response.json();
      setPiscesYesterday(data.description);
      console.log(data.description);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //Fetch Horoscopes for Tomorrow
    getAriesTomorrow();
    getTaurusTomorrow();
    getGeminiTomorrow();
    getCancerTomorrow();
    getLeoTomorrow();
    getVirgoTomorrow();
    getLibraTomorrow();
    getScorpioTomorrow();
    getSagittariusTomorrow();
    getCapricornTomorrow();
    getAquariusTomorrow();
    getPiscesTomorrow();
    //Fetch Horoscopes for Yesterday
    getAriesYesterday();
    getTaurusYesterday();
    getGeminiYesterday();
    getCancerYesterday();
    getLeoYesterday();
    getVirgoYesterday();
    getLibraYesterday();
    getScorpioYesterday();
    getSagittariusYesterday();
    getCapricornYesterday();
    getAquariusYesterday();
    getPiscesYesterday();
    //No need to fetch horoscopes for today because they are already fetched & saved in the local storage
  }, []);

  return (
    <div>
      <Header
        isDarkBackground={true}
        image={HoroscopeImage}
        header="Horoscopes For Today, Tomorrow and Yesterday"
        subheader="Discover everyday magic of our horoscope predictions"
      />
      <div className="my-5 flex flex-col justify-center items-center gap-y-8 gap-x-20 md:flex-row tracking-wider">
        <h1
          className={`duration-200 hover:text-indigo-600 ${
            day === 'yesterday' ? 'border-b-4 border-solid border-black' : ''
          }`}
          onClick={() => setDay('yesterday')}
        >
          YESTERDAY
        </h1>
        <h1
          className={`border-slate-600 duration-200 hover:text-indigo-600 p-4'
            ${day === 'today' ? 'border-b-4 border-solid' : ''}`}
          onClick={() => setDay('today')}
        >
          TODAY
        </h1>
        <h1
          className={`duration-200 hover:text-indigo-600 p-4 ${
            day === 'tomorrow' ? 'border-b-4 border-solid border-black' : ''
          }`}
          onClick={() => setDay('tomorrow')}
        >
          TOMORROW
        </h1>
      </div>
      <div>
        {day === 'today' && (
          <>
            <h1 className="text-2xl py-3 mx-20 md:mx-60">
              Discover Today's Horoscopes
            </h1>
            <section className="mx-20 md:mx-60 my-3 grid grid-cols-1 gap-x-20 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
              <Horoscope
                name="Aries"
                children={window.localStorage.getItem('aries')}
              />
              <Horoscope
                name="Taurus"
                children={window.localStorage.getItem('taurus')}
              />
              <Horoscope
                name="Gemini"
                children={window.localStorage.getItem('gemini')}
              />
              <Horoscope
                name="Cancer"
                children={window.localStorage.getItem('cancer')}
              />
              <Horoscope
                name="Leo"
                children={window.localStorage.getItem('leo')}
              />
              <Horoscope
                name="Virgo"
                children={window.localStorage.getItem('virgo')}
              />
              <Horoscope
                name="Libra"
                children={window.localStorage.getItem('libra')}
              />
              <Horoscope
                name="Scorpio"
                children={window.localStorage.getItem('scorpio')}
              />
              <Horoscope
                name="Sagittarius"
                children={window.localStorage.getItem('sagittarius')}
              />
              <Horoscope
                name="Capricorn"
                children={window.localStorage.getItem('capricorn')}
              />
              <Horoscope
                name="Aquarius"
                children={window.localStorage.getItem('aquarius')}
              />
              <Horoscope
                name="Pisces"
                children={window.localStorage.getItem('pisces')}
              />
            </section>
          </>
        )}
        {day === 'yesterday' && (
          <>
            <h1 className="text-2xl py-3 mx-20 md:mx-60">
              Discover Tomorow's Horoscopes
            </h1>
            <section className="mx-20 md:mx-60 my-3 grid grid-cols-1 gap-x-20 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
              <Horoscope name="Aries" children={ariesYesterday} />
              <Horoscope name="Taurus" children={taurusYesterday} />
              <Horoscope name="Gemini" children={geminiYesterday} />
              <Horoscope name="Cancer" children={cancerYesterday} />
              <Horoscope name="Leo" children={leoYesterday} />
              <Horoscope name="Virgo" children={virgoYesterday} />
              <Horoscope name="Libra" children={libraYesterday} />
              <Horoscope name="Scorpio" children={scorpioYesterday} />
              <Horoscope name="Sagittarius" children={sagittariusYesterday} />
              <Horoscope name="Capricorn" children={capricornYesterday} />
              <Horoscope name="Aquarius" children={aquariusYesterday} />
              <Horoscope name="Pisces" children={piscesYesterday} />
            </section>
          </>
        )}
        {day === 'tomorrow' && (
          <>
            <h1 className="text-2xl py-3 mx-20 md:mx-60">
              Discover Tomorow's Horoscopes
            </h1>
            <section className="mx-20 md:mx-60 my-3 grid grid-cols-1 gap-x-20 gap-y-5 lg:grid-cols-2 sm:grid-cols-1">
              <Horoscope name="Aries" children={aries} />
              <Horoscope name="Taurus" children={taurus} />
              <Horoscope name="Gemini" children={gemini} />
              <Horoscope name="Cancer" children={cancer} />
              <Horoscope name="Leo" children={leo} />
              <Horoscope name="Virgo" children={virgo} />
              <Horoscope name="Libra" children={libra} />
              <Horoscope name="Scorpio" children={scorpio} />
              <Horoscope name="Sagittarius" children={sagittarius} />
              <Horoscope name="Capricorn" children={capricorn} />
              <Horoscope name="Aquarius" children={aquarius} />
              <Horoscope name="Pisces" children={pisces} />
            </section>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Horoscopes;
