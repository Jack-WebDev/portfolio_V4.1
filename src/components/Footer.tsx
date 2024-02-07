import { Link } from "react-router-dom";
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
          <Link to={"https://github.com/Jack-WebDev"} target="_blank">
            <FaGithub color="#FFF" fontSize={"1.5rem"} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/katlegomabaso/"}
            target="_blank"
          >
            <FaLinkedin color="#FFF" fontSize={"1.5rem"} />
          </Link>
          <FaTwitter fontSize={"1.5rem"} /> <FaWhatsapp fontSize={"1.5rem"} />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            (+27) 67 016 6982
          </span>
        </div>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link
            className="signed"
            to={"https://github.com/Jack-WebDev"}
            target="_blank"
          >
            Jack WebDev
          </Link>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
