import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import { FaFacebookF } from 'react-icons/fa/index';
import { ImInstagram } from 'react-icons/im/index';
import { AiFillYoutube } from 'react-icons/ai/index';
import { AiOutlineTwitter } from 'react-icons/ai/index';
import Galaxy from '../assets/backgrounds/cosmos.jpg';
import { Link, NavLink } from 'react-router-dom';

type HeaderProps = {
  image: string;
  header: string;
  subheader?: string;
  isDarkBackground: boolean;
};

function Header({ image, header, subheader, isDarkBackground }: HeaderProps) {
  return (
    <>
      <div className="fixed top-0 w-full bg-white z-50 border-solid border-b-[2px] border-[#c9c4d7]">
        <nav className=" border-solid border-b-[1.5px] border-[#c9c4d7]">
          <ul className="flex justify-center gap-14 font-light my-4 mx-9 text-sm tracking-wide">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'line-through font-medium' : ''
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/horoscopes"
                className={({ isActive }) =>
                  isActive ? 'line-through font-medium' : ''
                }
              >
                HOROSCOPES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  isActive ? 'line-through font-medium' : ''
                }
              >
                EXPLORE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'line-through font-medium' : ''
                }
              >
                ABOUT
              </NavLink>
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
          <h3 className="cursor-pointer text-center text-[#3a3153] font-thin tracking-[.25em] md:text-2xl lg:text-2xl absolute">
            <Link to="/">RISING SIGN</Link>
          </h3>
          <div className="invisible flex gap-x-8 items-center lg:visible">
            <FaFacebookF className="cursor-pointer" />
            <ImInstagram className="cursor-pointer" />
            <AiFillYoutube className="cursor-pointer" />
            <AiOutlineTwitter className="cursor-pointer" />
          </div>
        </header>
      </div>
      {/* If the backhround of the header is dark, then the text is white, otherwise it is black. */}
      {isDarkBackground ? (
        <section className=" relative font-display mt-36 text-center w-full h-64 flex flex-col content-center justify-center bg-[#00000048]">
          <h3 className="relative tracking-[.25em] my-7 mx-9 text-white text-sm lg:text-sm md:text-sm">
            KEEP UP WITH OUR STORIES
          </h3>
          <h1 className=" relative text-white mx-9 tracking-wider font-semibold text-xl lg:text-3xl md:text-3xl">
            {header}
          </h1>
          <h2 className="relative tracking-wider mx-9 text-center text-white text-sm m-auto my-7 md:text-lg">
            {subheader}
          </h2>
          <img
            className=" object-cover absolute h-[100%] w-[100%] z-[-100] top-0 left-0"
            src={image}
          />
        </section>
      ) : (
        <section className=" relative font-display mt-36 text-center w-full h-64 flex flex-col content-center justify-center">
          <h3 className="relative tracking-[.25em] my-7 mx-9 text-black text-sm lg:text-sm md:text-sm">
            KEEP UP WITH OUR STORIES
          </h3>
          <h1 className=" relative text-black mx-9 tracking-wider font-semibold text-xl lg:text-3xl md:text-3xl">
            {header}
          </h1>
          <h2 className="relative tracking-wider mx-9 text-center text-black text-sm m-auto my-7 md:text-lg">
            {subheader}
          </h2>
          <img
            className=" object-cover absolute h-[100%] w-[100%] z-[-100] top-0 left-0 bg-gradient-to-b from-[rgba(0, 0, 0, 0.5)] to-[rgba(0, 0, 0, 0.5)]"
            src={image}
          />
        </section>
      )}
    </>
  );
}

export default Header;
