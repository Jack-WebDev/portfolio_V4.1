import { FaLinkedin, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="contactMe">Contact Me</h2>
      <p>
        I also offer website audits to improve your website's User Interface and
        User Experience.
      </p>

      <nav className="footer__nav">
        <div className="socials">
          <FaGithub fontSize={"1.5rem"} />
          <FaLinkedin fontSize={"1.5rem"} />
          <FaTwitter fontSize={"1.5rem"} /> <FaWhatsapp fontSize={"1.5rem"} />{" "}
          <span>(+27) 67 016 6982</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} <a className="signed" href="#">Jack WebDev</a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
