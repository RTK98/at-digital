import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-6">
          <div className="image">
            <img src={Logo} alt="Logo" className="Footerlogo" />
          </div>
        </div>
        <div className="col-3 footerSubHeading">
          <span className="footerHeading">Our Technologies</span>
        </div>
        <div className="col-3 footerSubHeading">
          <span className="footerHeading">Our Services</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="footerP">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="col-3 ">
          <ul className="footerLinks">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="col-3 ">
          <ul className="footerLinks">
            <li>Social media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
