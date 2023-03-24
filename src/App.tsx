import './index.css';
import {signs} from './data/zodiac_signs'
import { useState, useEffect } from 'react';
import {ZodiacSign} from './types'
import {capitalize} from './utils/capitalizeFirstLetter'
import Gemini from './assets/zodiac_signs/gemini.png';

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
      <nav className="text-3xl font-bold my-5 mx-3">Rising Sign</nav>
      <header className="text-xl my-5 text-center">
        Welcome to the Rising Sign.
      </header>
      <div>
        <h2 className="text-center text-3xl">
          Please choose your zodiac sign.
        </h2>
        <section className="grid items-center justify-items-center gap-4 grid-cols-1 md:grid-cols-3 l:grid-cols-4 xl:grid-cols-6">
          {signs.map((sign: ZodiacSign) => (
            <button key={sign.id} onClick={() => setSign(sign.name)}>
          
              <div className="flex flex-col items-center justify-center rounded-full w-40 p-7 relative">
                    <img
                className="w-10 relative"
                src={sign.src}
                alt={sign.name}
              />
              <h3 className="relative">{capitalize(sign.name)}</h3>
                <p className="text-sm relative">{sign.time}</p>
                <div className="absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-r from-[#818cf8] via-[#c4b5fd] to-[#fce7f3] rounded-full blur-xl"></div>
              </div>
            </button>
          ))}
        </section>
      </div>
      <div className="App">
        {horoscope}
        {/* <DailyHoroscope /> */}
      </div>
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
