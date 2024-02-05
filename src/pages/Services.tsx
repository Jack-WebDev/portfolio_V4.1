import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../components/CSS/Services.css";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="services__container">
        <Card
          imgSrc="Marketing-BG.webp"
          title="Online Marketing"
          details="With the help of SEO and social media marketing, I am able to help brands grow and build relationships with their clientele through online marketing platforms."
          cardBadge="New"
        />
        <Card
          imgSrc="Design-BG.webp"
          title="Applications Development"
          details="I am conviced all websites must be easy to find and effortless to use, hence one of my specialities is accessibility. I offer clients fully customised websites that are easy to use and fully responsive."
        />
        <Card
          imgSrc="Design-img.webp"
          title="Design"
          details="I pride myself in being able to create eye catching designs for clients, rich in quality and leave a lasting impression on their brands/websites."
          cardBadge="New"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
