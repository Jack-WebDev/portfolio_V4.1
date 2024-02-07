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
            imgSrc="src\assets\SunnySide.jpg"
          />
        </Link>

        <Link
          to={"https://jack-webdev.github.io/LoopStudios_Landing_Page/"}
          target="_blank"
        >
          <Card
            title="LoopStudios Landing Page"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
            imgSrc="src\assets\LoopStudios.jpg"
          />
        </Link>

        <Link to={""} target="_blank">
          <Card
            cardBadge="New"
            title="Planets"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
            imgSrc="src\assets\desktop-planet.jpg"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
