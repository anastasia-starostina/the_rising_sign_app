import './index.css';
import { signs } from './data/zodiac_signs';
import { useState, useEffect } from 'react';
import { ZodiacSign } from './types';
import { capitalize } from './utils/capitalizeFirstLetter';
import Galaxy from './assets/backgrounds/cosmos.jpg';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import { FaFacebookF } from 'react-icons/fa/index';
import { ImInstagram } from 'react-icons/im/index';
import { AiFillYoutube } from 'react-icons/ai/index';
import { AiOutlineTwitter } from 'react-icons/ai/index';

function App() {
  const [horoscope, setHoroscope] = useState('');
  const [sign, setSign] = useState('cancer');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=${sign}&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setHoroscope(json.description);
        console.log(json);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [sign]);

  return (
    <>
      <div className="fixed top-0 w-full bg-white z-50 border-solid border-b-[1.5px] border-[#c9c4d7]">
        <nav className=" border-solid border-b-[1.5px] border-[#c9c4d7]">
          <ul className="flex justify-center gap-14 font-light my-4 mx-9 text-sm tracking-wide">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>HOROSCOPES</a>
            </li>
            <li>
              <a>EXPLORE</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
          </ul>
        </nav>
        <header className="text-base my-8 mx-3 flex justify-around">
          <form className="text-[#3a3153] flex justify-between border-solid border-b-[1.5px] border-[#c9c4d7] invisible lg:visible">
            <input type="text" placeholder="Search" name="Search" />
            <a>
              <MagnifyingGlassIcon className=" h-6 w-6" />
            </a>
          </form>
          <h3 className=" text-center text-[#3a3153] font-thin tracking-[.25em] md:text-2xl lg:text-2xl absolute">
            RISING SIGN
          </h3>
          <div className="invisible flex gap-x-8 items-center lg:visible">
            <FaFacebookF />
            <ImInstagram />
            <AiFillYoutube />
            <AiOutlineTwitter />
          </div>
        </header>
      </div>
      <section className=" relative font-display mt-36 text-center w-full h-96 flex flex-col content-center justify-center">
        <h3 className="relative tracking-[.25em] my-7 mx-9 text-[#ffffff] text-sm lg:text-sm md:text-sm">
          KEEP UP WITH OUR STORIES
        </h3>
        <h1 className=" relative text-[#ffffff] mx-9 tracking-wider font-semibold text-xl lg:text-3xl md:text-3xl">
          What's your Zodiac Sign? Read Your Daily Horosope.
        </h1>
        <h2 className="relative tracking-wider mx-9 text-center text-[#ffffff] text-sm m-auto my-7 md:text-lg">
          Discover what your zodiac sign has in store for you today.
        </h2>
        <img
          className=" object-cover absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-b from-[rgba(0, 0, 0, 0.5)] to-[rgba(0, 0, 0, 0.5)]"
          src={Galaxy}
        />
      </section>
      <div className="p-12">
        <section className="my-4 mx-9 font-display grid items-center justify-items-center gap-4 grid-cols-1 md:grid-cols-3 l:grid-cols-4 xl:grid-cols-6">
          {signs.map((sign: ZodiacSign) => (
            <button key={sign.id} onClick={() => setSign(sign.name)}>
              <div className="flex flex-col items-center justify-center rounded-full w-44 p-7 relative">
                <div className="relative w-32 h-24 flex flex-col items-center justify-center">
                  <div className="absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-r from-[#818cf8] via-[#c4b5fd] to-[#fce7f3] rounded-full blur-xl"></div>
                  <img
                    className="w-10 relative"
                    src={sign.src}
                    alt={sign.name}
                  />
                </div>
                <h3 className="relative p-2 m-1">{capitalize(sign.name)}</h3>
                <p className="text-sm relative tracking-wider">{sign.time}</p>
              </div>
            </button>
          ))}
        </section>
      </div>
      <section className="mx-20 md:mx-44 my-4 ">
        <h1 className="text-lg  md:text-2xl font-bold tracking-wide">
          Free Horoscopes for Every Star Sign
        </h1>
        <p>
          What does the future have in store for you? From Aries to Pisces, our
          daily Vedic Horoscopes will help you understand your relationships and
          your purpose.{' '}
        </p>
      </section>
      <div className="h-60 w-4/6 text-center m-auto">{horoscope}</div>
      <footer className="fixed left-0 bottom-0 w-[100%] bg-slate-50 text-center">
        <a
          href="https://www.flaticon.com/free-icons/gemini"
          title="gemini icons"
        >
          Zodiac icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );
}

export default App;
