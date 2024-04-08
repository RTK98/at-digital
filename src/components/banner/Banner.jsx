import React from "react";
import BannerImage from "../../assets/img/Banner.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="services-contianer">
      <img src={BannerImage} alt="banner" className="heroSection" />
      <div className="square">
        <p className="squareHeading">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <button className="bannerButton">Get free consultation</button>
      </div>
    </div>
  );
}

export default Banner;
