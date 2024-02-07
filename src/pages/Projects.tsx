import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Header />

      <h2 style={{ textAlign: "center", marginBlockStart: "4rem" }}>
        Project Catalogue
      </h2>
      <div className="project__container">
        <Link
          to={"https://jack-webdev.github.io/Sunnyside_Landing_Page/"}
          target="_blank"
        >
          <Card
            title="Sunnyside Landing Page"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
            imgSrc="SunnySide.jpg"
          />
        </Link>

        <Link
          to={"https://jack-webdev.github.io/LoopStudios_Landing_Page/"}
          target="_blank"
        >
          <Card
            title="LoopStudios Landing Page"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
            imgSrc="LoopStudios.jpg"
          />
        </Link>

        <Link to={""} target="_blank">
          <Card
            cardBadge="New"
            title="Planets"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
            imgSrc="desktop-planet.jpg"
          />
        </Link>
        <Link to={"https://github.com/Jack-WebDev/rest-countries-API.git"} target="_blank">
          <Card
            cardBadge="New"
            title="Countries API"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
            imgSrc="desktop-preview.jpg"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
