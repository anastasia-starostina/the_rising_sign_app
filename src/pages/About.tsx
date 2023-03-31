import Footer from "../components/Footer";
import Header from "../components/Header";
import Abstract from "../assets/backgrounds/abstract.jpg";

function About() {
  return (
    <div>
      <Header
        image={Abstract}
        header="Learn About Rising Star"
        subheader="Find Out About Rising Star's Story"
        isDarkBackground={true}
      />
      <Footer />
    </div>
  );
}
export default About;