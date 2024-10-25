import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" >
      <div className="dropdown__title" >
        <h2>{title}</h2>
        <span className="arrow-icon" onClick={toggleDropdown}>
            
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
