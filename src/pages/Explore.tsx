import Footer from '../components/Footer';
import Header from '../components/Header';
import HoroscopeBackground from "../assets/backgrounds/star-signs.jpg"

function Explore() {
  return (
    <div>
      <Header isDarkBackground={true} image={HoroscopeBackground} header="Learn More About Astrology By Joining Our Community" subheader="Join our comminity of like-minded people" />
      <Footer/>
    </div>
  );
}
export default Explore;
