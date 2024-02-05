import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <Header />

        <h2 style={{textAlign: "center", marginBlockStart: "4rem"}}>Project Catalogue</h2>
      <div className="project__container">
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
        <Card
          title="Test"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit!"
          imgSrc="missing-parts.jpg"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
