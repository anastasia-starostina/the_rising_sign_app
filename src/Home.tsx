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

interface HoroscopeData {
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
}

interface HoroscopeState {
  [key: string]: HoroscopeData;
}

function Home() {
   const [horoscopes, setHoroscopes] = useState<HoroscopeState>({});

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

    useEffect(() => {
      const fetchData = async () => {
        const ariesData = await getHoroscopeData('aries');
        const taurusData = await getHoroscopeData('taurus');
        const geminiData = await getHoroscopeData('gemini');
        const cancerData = await getHoroscopeData('cancer');
        const leoData = await getHoroscopeData('leo');
        const virgoData = await getHoroscopeData('virgo');
        const libraData = await getHoroscopeData('libra');
        const scorpioData = await getHoroscopeData('scorpio');
        const sagittariusData = await getHoroscopeData('sagittarius');
        const capricornData = await getHoroscopeData('capricorn');
        const aquariusData = await getHoroscopeData('aquarius');
        const piscesData = await getHoroscopeData('pisces');
        setHoroscopes({
          aries: ariesData,
          taurus: taurusData,
          gemini: geminiData,
          cancer: cancerData,
          leo: leoData,
          virgo: virgoData,
          libra: libraData,
          scorpio: scorpioData,
          sagittarius: sagittariusData,
          capricorn: capricornData,
          aquarius: aquariusData,
          pisces: piscesData,
        });
      };
      fetchData();
    }, []);

    const getHoroscopeData = async (horoscope : string) => {
      try {
      const url = `${
      import.meta.env.VITE_APP_BASE_URL}&sign=${horoscope}&date=${date}`;
       const response = await fetch(url, fetchOptions);
       const data = await response.json();
       return data; }
       catch (error) {
         console.error(error);
          const backup = backupData.find((sign) => sign.name === horoscope);
          return backup;
       }
    };

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
          {Object.entries(horoscopes).map(([key, value]) => (
           <Horoscope children={value.description} name={key.charAt(0).toUpperCase() + key.substring(1)} key={key}/>
          ))}

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
