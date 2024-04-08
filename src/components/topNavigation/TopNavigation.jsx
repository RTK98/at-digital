import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNavigation.css";
import Logo from "../../assets/img/Logo.png";
import menuIcon from "../../assets/img/toggleImg.png";
import closeMenuIcon from "../../assets/img/closeToggleImg.png";

function TopNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className={`navbar ${showMenu ? "active" : ""}`}>
        <img src={Logo} alt="ATDigital" className="logo" />
        <div className="toggle-menu" onClick={toggleMenu}>
          {showMenu ? (
            <img src={closeMenuIcon} alt="Close" className="toggle-img" />
          ) : (
            <img src={menuIcon} alt="Menu" className="toggle-img" />
          )}
        </div>
        <ul className={`nav-links ${showMenu ? "active" : ""}`}>
          <Link to="/" className="services">
            <li>SERVICES</li>
          </Link>
          <Link to="/about" className="about">
            <li>ABOUT US</li>
          </Link>
          <Link to="/contact" className="contact">
            <li>CONTACT US</li>
          </Link>
          <Link to="/careers" className="careers">
            <li>CAREERS</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default TopNavigation;
