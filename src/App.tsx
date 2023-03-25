import './index.css';
import { signs } from './data/zodiac_signs';
import { useState, useEffect } from 'react';
import { ZodiacSign } from './types';
import { capitalize } from './utils/capitalizeFirstLetter';
import Galaxy from './assets/backgrounds/cosmos.jpg';

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
      <nav className="text-base my-5 mx-3 text-center text-[#3a3153] font-thin tracking-[.25em] md:text-2xl lg:text-2xl">
        RISING SIGN
      </nav>
      <header className=" relative font-display my-5 text-center w-full h-96 flex flex-col content-center justify-center">
        <h3 className="relative tracking-[.25em] my-7 text-[#ffffff] text-sm lg:text-sm md:text-sm">
          KEEP UP WITH OUR STORIES
        </h3>
        <h1 className=" relative text-[#ffffff] tracking-wider font-semibold text-xl lg:text-3xl md:text-3xl">
          What's your Zodiac Sign? Read Your Daily Horosope.
        </h1>
        <h2 className="relative tracking-wider text-center text-[#ffffff] text-sm m-auto my-7 md:text-lg">
          Discover what your zodiac sign has in store for you today.
        </h2>
        <img
          className=" object-cover absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-b from-[rgba(0, 0, 0, 0.5)] to-[rgba(0, 0, 0, 0.5)]"
          src={Galaxy}
        />
      </header>
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
