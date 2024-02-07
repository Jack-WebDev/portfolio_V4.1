import Button from "./Button";
import "./CSS/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Hi, I'm Jack</h1>
      <p className="leading__text">
        I specialize in Design, Online Marketing and Website Development with a
        focus on responsiveness and accesibility
      </p>

      <p className="title">Software Developer | Freelancer</p>
      <Button title="Let's Connect!" href="https://www.linkedin.com/in/katlegomabaso/" />
    </div>
  );
};

export default Hero;
