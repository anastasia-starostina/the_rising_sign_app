function SubscribeForm() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="text-base font-medium">
        SUBSCRIBE TO OUR NEWSLETTER
      </h3>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Email*" />
        <button className="border border-neutral-800 p-3">SUBSCRIBE</button>
        <p className="text-sm">*Get your horoscope every day</p>
      </form>
    </div>
  );
}

export default SubscribeForm;
