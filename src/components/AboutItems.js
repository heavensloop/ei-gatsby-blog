import React from "react";

const AboutItems = ({ headshot }) => {
  return (
    <div className="about-content">
      <div className="l-grid-left bg-color-white l-height-100 d-flex flex-direction">
        <img
          className="about--photo u-margin-top-medium u-margin-left-huge"
          src={headshot}
          alt="my headshot"
        />
      </div>

    </div>
  );
};

export default AboutItems;
