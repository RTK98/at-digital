import React from "react";
import "./LowerSection.css";
import ImageLower from "../../assets/img/imageLower.png";
function LowerSection() {
  return (
    <div className="">
      <div className="container lowerSection">
        <div className="row lowerRow">
          <div className="col-8 lowSecCol">
            <p className="lowerSectionHeading">Digital Strategy Consulting</p>
            <p className="lowerSectionParagraph">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="SectionBtn"><span>LEARN MORE</span></button>
          </div>
          <div className="col-4 lowSecImg">
            <img
              src={ImageLower}
              alt="ImageLower"
              className="lowerSectionImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerSection;
