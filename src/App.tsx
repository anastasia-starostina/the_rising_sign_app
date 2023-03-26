import './index.css';
import { useState, useEffect, ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Signs from './components/Signs';

function App() {
  const [horoscopes, setHoroscopes] = useState();
  const [aries, setAries] = useState('');
  const [taurus, setTaurus] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=aries&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setAries(json.description);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}?sign=taurus&day=today`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setTaurus(json.description);
        console.log('Horoscopes' + horoscopes);
      });
  }, []);

  return (
    <>
      <Header />
      <Signs />
      <section className="mx-20 md:mx-44 my-4 ">
        <h1 className="text-lg py-3 mb-3 md:text-2xl font-bold tracking-wide">
          Free Horoscopes for Every Star Sign
        </h1>
        <p>
          What does the future have in store for you? From Aries to Pisces, our
          free daily horoscopes will help you understand your relationships and
          purpose. No day is the same, and your horoscope today will differ from
          your horoscope tomorrow. With our free horoscopes, you can be sure
          you'll get your regular astrological insights by learning what's in
          the stars.
        </p>
      </section>
      <div className="mx-20 md:mx-44 my-4 grid grid-cols-1 gap-5 md:grid-cols-2 ">
        <div>{aries}</div>
        <div>{taurus}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
