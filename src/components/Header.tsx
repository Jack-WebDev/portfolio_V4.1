import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegFileCode,
  FaBriefcase,
  FaHome,
  FaFolderOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./CSS/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navBar">
        <Link className="logo" to={"/"}>
          <span>J</span>ack <span>W</span>ebDev
        </Link>

        <div className="hambuger" onClick={handleToggle}>
          {isOpen ? <FaTimes color="#FFF" /> : <FaBars color="#FFF" />}
        </div>
        <ul className={`nav__menu ${isOpen ? "open" : ""}`}>
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>
              <FaHome color="#FFF" /> Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/mywork"}>
              <FaFolderOpen color="#FFF" /> My Work
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/services"}>
              <FaBriefcase color="#FFF" /> My Services
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/resume"}>
              <FaRegFileCode color="#FFF" /> My Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
