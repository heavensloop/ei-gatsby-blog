import React from "react";

const WelcomeItems = props => {
  return (
    <div className="welcome-content">
      <h3 className="grid--title u-margin-top-huge u-padding-left u-padding-right u-center-text">
        {props.name}
      </h3>
      <p className="grid-intro u-padding-left-small u-padding-right-small u-center-text">
        {props.introduction}
      </p>
    </div>
  );
};

export default WelcomeItems;
