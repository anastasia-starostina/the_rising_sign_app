import { MouseEventHandler, useEffect, useState } from 'react';
import { signs } from '../data/zodiac_signs';
import { ZodiacSign } from '../types';
import { capitalize } from '../utils/capitalizeFirstLetter';

type SignsProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};


function Signs() {
const [sign, setSign] = useState('cancer');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=${sign}&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.description);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [sign]);

  return (
    <div className="p-12">
    <section className="my-4 mx-9 font-display grid items-center justify-items-center gap-4 grid-cols-1 md:grid-cols-3 l:grid-cols-4 xl:grid-cols-6">
      {signs.map((sign: ZodiacSign) => (
        <button key={sign.id} onClick={() => setSign(sign.name)}>
          <div className="flex flex-col items-center justify-center rounded-full w-44 p-7 relative">
            <div className="relative w-32 h-24 flex flex-col items-center justify-center">
              <div className="absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-r from-[#818cf8] via-[#c4b5fd] to-[#fce7f3] rounded-full blur-xl"></div>
              <img className="w-10 relative" src={sign.src} alt={sign.name} />
            </div>
            <h3 className="relative p-2 m-1">{capitalize(sign.name)}</h3>
            <p className="text-sm relative tracking-wider">{sign.time}</p>
          </div>
        </button>
      ))}
    </section>
    </div>
  );
}

export default Signs;
