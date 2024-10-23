import React from "react";
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img src={logo}  alt="Kasa Logo" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
