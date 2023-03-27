import { MdOutlineArrowRight } from 'react-icons/md/index';

type HoroscopeProps = {
  children: React.ReactNode;
  name: string;
};


function Horoscope({ children, name }: HoroscopeProps){
  return (
    <>
    <div className="mx-2 my-2 leading-7 text-lg font-light p-7 bg-[#fcf3f8] rounded-lg hover:text-indigo-500">
      <h3 className="text-2xl font-semibold py-3 tracking-wide">{name}</h3>
      {children}
      <p className="text-sm mt-4 tracking-wider hover:text-indigo-700">
        READ TODAY'S {name.toUpperCase()} HOROSCOPE{' '}
        <MdOutlineArrowRight className="inline-block text-sm my-auto tracking-wider h-6 w-6 hover:text-indigo-700" />
      </p>
    </div>
    </>
  );
}

export default Horoscope;
