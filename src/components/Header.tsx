import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaRegFileCode,
  FaBriefcase,
  FaHome,
  FaFolderOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./CSS/Header.css";
import NavLinks from "./NavLinks.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "FaHome":
        return <FaHome />;
      case "FaFolderOpen":
        return <FaFolderOpen />;
      case "FaBriefcase":
        return <FaBriefcase />;
      case "FaRegFileCode":
        return <FaRegFileCode />;
      default:
        return null;
    }
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
          {NavLinks.map((navLink) => (
            <li className="nav__item" key={navLink.id}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active nav__link" : "nav__link";
                }}
                to={navLink.path}
              >
                {renderIcon(navLink.icon)} {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
