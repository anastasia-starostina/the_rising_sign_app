import SubscribeForm from './SubscribeForm';

function Footer() {
  return (
    <footer className=" mt-auto flex flex-col items-center h-72 justify-center bottom-0 w-[100%] bg-[#fffafd] text-center border-solid border-t-[2px] border-[#fcf3f8]">
      <div className="mt-20 grid grid-cols-2 gap-x-60 ">
        <div className="flex flex-col gap-y-3 text-left">
          <h3>Horoscope</h3>
          <h3>Compatibility</h3>
          <h3>Lucky Numbers</h3>
          <h3>Explore</h3>
          <h3>About</h3>
        </div>
        <SubscribeForm />
      </div>

      <a href="https://www.flaticon.com/free-icons/gemini">
        <p className="text-[0.6rem] mt-20">
          Zodiac Sign Illustrations by Freepik
        </p>
      </a>
    </footer>
  );
}

export default Footer;
