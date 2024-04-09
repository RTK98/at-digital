import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <div className="content-faq">
        <h2 className="faq-header">Frequently asked questions</h2>
        {[1, 2, 3].map((index) => (
          <div key={index}>
            <button
              className="collapsible"
              onClick={() => toggleAccordion(index)}
            >
              <span>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero</span>
              {activeIndex === index ? <span>-</span> : <span>+</span>}
            </button>
            <div className={`content ${activeIndex === index ? "active" : ""}`}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
