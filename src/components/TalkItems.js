import React, { useState } from "react";


const TalkItems = ({ year, title, text}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-item" id="question1">
        <a className="accordion-link" href="#question1" onClick={handleToggle}>
          {year}
          <i className={`fa ${isOpen ? 'fa-angle-down' : 'fa-angle-right'}`} />
        </a>
        <div className={`answer ${isOpen && 'open'}`}>
          <p>{ title }</p>
          <p>{ text }</p>
        </div>
      </div>
    </div>
  )
}

export default TalkItems;
