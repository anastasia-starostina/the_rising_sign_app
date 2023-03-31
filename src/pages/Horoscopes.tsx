import Footer from '../components/Footer';
import Header from '../components/Header';
import HoroscopeImage from '../assets/backgrounds/esoteric.jpg';

function Horoscopes() {
  return (
    <div>
      <Header
        isDarkBackground={true}
        image={HoroscopeImage}
        header="What is Your Star Sign?"
        subheader="Discover everyday magic of our horoscope predictions"
      />
      <div className="my-20 flex flex-col justify-center items-center gap-y-8 gap-x-20 md:flex-row tracking-wider">
        <h1 className="duration-200 hover:text-indigo-600">YESTERDAY</h1>
        <h1 className=" p-4 border-b-4 border-solid border-slate-600 duration-200 hover:text-indigo-600">
          TODAY
        </h1>
        <h1 className="duration-200 hover:text-indigo-600">TOMORROW</h1>
      </div>
      <Footer />
    </div>
  );
}
export default Horoscopes;
