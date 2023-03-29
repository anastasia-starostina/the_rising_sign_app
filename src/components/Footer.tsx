import { Link } from 'react-router-dom';
import SubscribeForm from './SubscribeForm';

function Footer() {
  return (
    <footer className=" mt-auto flex flex-col items-center h-72 justify-center bottom-0 w-[100%] bg-[#fffafd] text-center border-solid border-t-[2px] border-[#fcf3f8]">
      <div className="mt-20 grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:gap-x-60 ">
        <div className="flex flex-col invisible gap-y-3 text-left md:visible">
          <Link to="/horoscopes" className="hover:text-indigo-600">
            {' '}
            <h3>Horoscopes</h3>
          </Link>
          <h3>Compatibility</h3>
          <h3>Lucky Numbers</h3>
          <Link to="/explore" className="hover:text-indigo-600">
            <h3>Explore</h3>
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            <h3>About</h3>
          </Link>
        </div>
        <SubscribeForm />
      </div>
      <p className="text-sm py-1 mt-10 text-slate-600">
        <a href="https://github.com/nsstarr">
          &copy; Designed & built by Anastasia Starostina
        </a>
      </p>
      <a href="https://www.flaticon.com/free-icons">
        <p className="text-[0.75rem] p-1 text-slate-400">
          Zodiac Sign Illustrations by Freepik
        </p>
      </a>
    </footer>
  );
}

export default Footer;
