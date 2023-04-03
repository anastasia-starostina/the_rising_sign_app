import Footer from "../components/Footer";
import Header from "../components/Header";
import Mountains from "../assets/backgrounds/mountains.jpg";
import Cactus from "../assets/backgrounds/cactus.jpg";

function About() {
  return (
    <div>
      <Header
        image={Mountains}
        header="About Rising Star"
        isDarkBackground={true}
      />
      <section className="flex gap-x-10 mx-20 md:mx-60 my-4">
        <img src={Cactus} alt="" className="w-1/2 p-10" />
        <div className=" text-base leading-7 tracking-wide md:text-base my-5">
          <h2 className="tracking-wider font-semibold text-xl py-3">Meet Your Astrologers</h2>
          Rising Sign is a new horoscope website designed to help you navigate
          your life's journey with confidence and clarity. We believe that
          astrology is a powerful tool that can help you understand yourself and
          the world around you. Our goal is to provide accurate and insightful
          horoscopes that will help you make better decisions and live your best
          life.
          <br />
          <br />
          Our team of expert astrologers and writers are dedicated to bringing
          you the latest insights and perspectives on the astrological world. We
          know that horoscopes are not just about predicting the future, but
          also about understanding the present moment and making the most of it.
          <br />
          <br />
          At Rising Sign, we believe that everyone has a unique astrological
          profile that can help them find their true path in life. That's why we
          offer personalized horoscopes based on your birth chart, which takes
          into account your unique astrological makeup. We believe that this
          approach can help you unlock your full potential and achieve your
          goals.
          <br />
          <br />
          We also offer a wide range of articles, guides, and resources to help
          you deepen your understanding of astrology and its many applications.
          Whether you're a beginner or an experienced astrologer, you'll find
          plenty of valuable content on our website. We are committed to
          providing a safe and inclusive space for everyone to explore astrology
          and its many benefits.
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default About;