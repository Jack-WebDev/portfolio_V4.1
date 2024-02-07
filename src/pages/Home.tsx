import { Link } from "react-router-dom";

import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../components/CSS/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />

      <h2 style={{ textAlign: "center" }}>My Favourites:</h2>
      <div className="project__container">
        <Link
          to={"https://github.com/Jack-WebDev/CoffeeRoasters_MERN.git"}
          target="_blank"
        >
          <Card
            cardBadge="NEW"
            title="Coffeeroasters"
            imgSrc="src\assets\missing-parts.jpg"
            details="Coffeeroasters brews the finest coffee with passion, delivering unparalleled flavor and satisfaction to every cup."
          />
        </Link>

        <Link to={"https://jack-webdev.github.io/photosnap/"} target="_blank">
          <Card
            title="Photo Snap"
            imgSrc="src\assets\photoSnap.webp"
            details="PhotoSnap captures timeless moments with expert precision, delivering unparalleled quality and unforgettable memories."
          />
        </Link>

        <Link to={"https://github.com/Jack-WebDev/"} target="_blank">
          <Card
            cardBadge="In Dev"
            title="Audiophile"
            imgSrc="src\assets\audiophile.webp"
            details="Audiophile offers premium headsets and earphones, delivering unparalleled sound quality and comfort for ultimate satisfaction."
          />
        </Link>

        <Link to={"https://github.com/Jack-WebDev/"} target="_blank">
          <Card
            cardBadge="In Dev"
            title="CelestialHub"
            imgSrc="src\assets\space.jpg"
            details="Discover cosmic wonders at CelestialHub: space missions, breathtaking imagery, latest discoveries, and educational resources for all ages."
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
