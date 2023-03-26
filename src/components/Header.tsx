import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import { FaFacebookF } from 'react-icons/fa/index';
import { ImInstagram } from 'react-icons/im/index';
import { AiFillYoutube } from 'react-icons/ai/index';
import { AiOutlineTwitter } from 'react-icons/ai/index';
import Galaxy from '../assets/backgrounds/cosmos.jpg';

function Header() {
  return (
    <>
    <div className="fixed top-0 w-full bg-white z-50 border-solid border-b-[2px] border-[#c9c4d7]">
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
    <section className=" relative font-display mt-36 text-center w-full h-64 flex flex-col content-center justify-center">
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
      </>
  );
}

export default Header;