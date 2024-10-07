import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo kasa"/>
            </div>
            <div className="navbar__links">
                <Link to="/" className="navbar__links-item">Accueil</Link>
                <Link to="/about" className="navbar__links-item">À propos</Link>
            </div>
        </nav>
    )
}

export default Navbar;