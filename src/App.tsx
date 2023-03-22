import './index.css';
import DailyHoroscope from './DailyHoroscope';

function App() {
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
        <section className="grid gap-4 grid-cols-1 md:grid-cols-3 l:grid-cols-4 xl:grid-cols-6">
          <a>
            <div className="bg-slate-300">
              <h3>Aries</h3>
              <p>Mar 21 - Apr 19</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Taurius</h3>
              <p>Apr 20 - May 20</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Gemini</h3>
              <p>May 21 - Jun 20</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Cancer</h3>
              <p>Jun 21 - Jul 22</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Leo</h3>
              <p>Jul 23 - Aug 22</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Virgo</h3>
              <p>Apr 23 - Sep 22</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Libra</h3>
              <p>Sep 23 - Oct 22</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Scorpio</h3>
              <p>Oct 23 - Nov 21</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Sagittarius</h3>
              <p>Nov 22 - Dec 21</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Capricorn</h3>
              <p>Dec 22 - Jan 19</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Aquarius</h3>
              <p>Jan 20 - Feb 18</p>
            </div>
          </a>
          <a>
            <div className="bg-slate-300">
              <h3>Pisces</h3>
              <p>Feb 19 - Mar 20</p>
            </div>
          </a>
        </section>
      </div>
      <div className="App">
        <DailyHoroscope />
      </div>
    </>
  );
}

export default App;
