import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo kasa"/>
            </div>
            <div className="navbar__links">
                <NavLink to="/" className="navbar__links-item">Accueil</NavLink>
                <NavLink to="/about" className="navbar__links-item">À propos</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;