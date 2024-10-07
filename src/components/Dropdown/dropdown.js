import React, { useState } from "react";
import "./dropdown.css"; 

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown__container" >
      <div className="dropdown__title" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <span className="arrow-icon">
            
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </div>
      {isOpen && <div className="dropdown__content"><p>{content}</p></div>}
    </div>
  );
};

export default Dropdown;
