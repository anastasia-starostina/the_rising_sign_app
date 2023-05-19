import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: { push: () => void }[];
  }
}

const AdsComponent = () => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({ push: () => {} });
    } catch (e) {}
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-5764345831028193"
        data-ad-slot="6768616308"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default AdsComponent;
