import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai/index';

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const FORM_URL = import.meta.env.VITE_APP_SUBSCRIPTION_FORM_URL

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });
      const json = await response.json();

      if (json.status === 'success') {
        setStatus("SUCCESS")
        return;
      }
    } catch (err) {
      console.log(err);
      setStatus('ERROR');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };


  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="text-sm font-semibold tracking-wide">
        GET FREE HOROSCOPE IN YOUR INBOX.
      </h3>
        {status === 'SUCCESS' && (
          <div className='text-sm font-medium text-emerald-700'>
            <p>
              Thank you for subscribing.{' '}
            </p>
            <p>Please check your inbox to confirm the subscription!</p>
          </div>
        )}
        {status === 'ERROR' && (
          <div className='text-sm text-rose-600'>
            <p>Oops, something went wrong...</p>
            <p>
              Please,{' '}
              <button onClick={() => setStatus(null)}>try again.</button>
            </p>
          </div>
        )}
        {status === null && (
          <form
            className="flex flex-col gap-4 w-60 msx-w-3xl"
            onSubmit={handleSubmit}
          >
            <input
              onChange={handleEmailChange}
              aria-label="Your email address"
              name="email_address"
              placeholder="Email*"
              required
              type="email"
            />
            <button className=" flex items-center justify-center gap-x-2 max-w-xl border border-neutral-800 p-3 hover:bg-slate-800 hover:text-white">
              SUBSCRIBE
              <AiOutlineMail />
            </button>
            <p className="text-sm">*Get your horoscope every day</p>
          </form>
        )}
    </div>
  );
}

export default SubscribeForm;
