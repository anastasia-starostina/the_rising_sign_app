import { AiOutlineMail } from 'react-icons/ai/index';



const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
  event.preventDefault();
};

function SubscribeForm() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="text-sm font-semibold tracking-wide">
        GET FREE HOROSCOPE IN YOUR INBOX.
      </h3>
      <form className="flex flex-col gap-4 w-60 msx-w-3xl" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email*" />
        <button className=" flex items-center justify-center gap-x-2 max-w-xl border border-neutral-800 p-3 hover:bg-slate-800 hover:text-white">
          SUBSCRIBE
          <AiOutlineMail />
        </button>
        <p className="text-sm">*Get your horoscope every day</p>
      </form>
    </div>
  );
}

export default SubscribeForm;
