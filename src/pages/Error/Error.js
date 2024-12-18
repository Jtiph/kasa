import React from "react";
import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
    return (
        <div className="error">
        <h1 className='error__title'>404</h1>
        <p className="error__subtitle">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error;
