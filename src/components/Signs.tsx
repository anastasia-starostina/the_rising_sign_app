import { useSpring, animated } from '@react-spring/web';
import { MouseEventHandler, useEffect, useState } from 'react';
import { signs } from '../data/zodiac_signs';
import { ZodiacSign } from '../types';
import { capitalize } from '../utils/capitalizeFirstLetter';

function Signs() {
  const [sign, setSign] = useState('');
  
  //React Spring Animation
  const [springs] = useSpring(() => ({
    from: { y: 50 },
    to: { y: 0 },
    delay: 300,
  }));

  return (
    <div className="p-12">
      <section className=" mx-20 font-display grid items-center justify-items-center grid-cols-1 md:grid-cols-3 l:grid-cols-4 xl:grid-cols-6">
        {signs.map((sign: ZodiacSign) => (
          <button key={sign.id} onClick={() => setSign(sign.name)}>
            <div className="flex flex-col items-center justify-center rounded-full w-44 p-7 relative">
              <div className="relative w-28 h-24 flex flex-col items-center justify-center">
                <div className="absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-r from-[#818cf8] via-[#c4b5fd] to-[#fce7f3] rounded-full blur-xl"></div>
                <animated.img
                  className="w-8 relative hover:opacity-70"
                  src={sign.src}
                  alt={sign.name}
                  style={{ ...springs }}
                />
              </div>
              <h3 className="relative p-2 m-1 text-slate-800 hover:text-indigo-700">
                {capitalize(sign.name)}
              </h3>
              <p className="text-sm relative tracking-wider">{sign.time}</p>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
}

export default Signs;
