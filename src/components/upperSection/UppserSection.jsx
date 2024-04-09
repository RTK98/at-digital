import React from "react";
import "./UpperSection.css";
import ImageUpper from "../../assets/img/imageUpper.png";
function UppserSection() {
  return (
    <div>
      <div className="container upperSection">
        <div className="row">
          <div className="col-4 upSecImg">
            <img
              src={ImageUpper}
              alt="ImageUpper"
              className="upperSectionImg"
            />
          </div>
          <div className="col-8 upSecCol">
            <p className="upperSectionHeading">Web & Mobile App Development</p>
            <p className="upperSectionParagraph">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="SectionBtn"><span>LEARN MORE</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UppserSection;
