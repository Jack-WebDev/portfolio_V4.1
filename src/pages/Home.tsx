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
        <Card
          cardBadge="NEW"
          title="Coffeeroasters"
          imgSrc="missing-parts.jpg"
          details="It was nice"
        />
        <Card
          cardBadge="NEW"
          title="Coffeeroasters"
          imgSrc="missing-parts.jpg"
          details="It was nice"
        />
        <Card
          cardBadge="NEW"
          title="Coffeeroasters"
          imgSrc="missing-parts.jpg"
          details="It was nice"
        />
        <Card
          cardBadge="NEW"
          title="Coffeeroasters"
          imgSrc="missing-parts.jpg"
          details="It was nice"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
