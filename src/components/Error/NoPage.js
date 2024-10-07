import React from "react";
import { Link } from 'react-router-dom';
import "./ErrorPage.scss";

function NoPage() {
    return (
        <div>
        <h1 className='error__title'>404</h1>
        <p className="error__subtitle">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NoPage;
