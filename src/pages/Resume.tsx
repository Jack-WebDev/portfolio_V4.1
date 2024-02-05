import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/CSS/Resume.css";

const Resume = () => {
  return (
    <div>
      <Header />
      <div className="cv__container">
        <div className="education__container">
          <h2>Education</h2>

          <div className="education__content">
            <div>
              <h3>BCOM Accouting</h3>
              <h4>2018 - 2021 at North-West University</h4>
            </div>

            <div>
              <h3>Systems Development</h3>
              <h4>2022 - 2023 at WeThinkCode_</h4>
            </div>
          </div>
        </div>

        <div className="experience__container">
          <h2>Experience</h2>

          <div className="experience__content">
            <div>
              <h3>Supervisor</h3>
              <h4>2019 - 2021 at WhiteFox Ltd</h4>

              <p>
                As a supervisor of an online delivery service, my duties
                included overseeing daily operations, managing delivery staff,
                and ensuring timely and accurate order fulfilment. I coordinated
                logistics, track deliveries, and address customer inquiries. I
                had to maintain efficiency, ensuring customer satisfaction, and
                optimizing the delivery process.
              </p>
            </div>

            <div>
              <h3>Freelancer</h3>
              <h4>2022 - present</h4>

              <p>
                As a software developer freelancer, I'm involved in
                collaborating with clients to understand their requirements,
                designing and implementing software solutions, conducting
                thorough testing, and delivering high-quality, customized
                projects. I enjoy managing project timelines and communication
                while leveraging my expertise to provide efficient and tailored
                software solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="skills__container">
          <h2>Skills</h2>

          <ul className="skills" style={{ listStyle: "" }}>
            <li>CSS3/SASS</li>
            <li>TailwindCSS/Bootstrap V5</li>
            <li>React + TypeScript</li>
            <li>MongoDB/MySQL</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Flutter</li>
            <li>Java</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
