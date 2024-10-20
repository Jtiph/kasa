import React from 'react';
import "./Card.scss";


function Card({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card__img" />
        <div className="card__overlay"></div>

        <h2 className="card__title">{title}</h2>
      </div>
    );
}

export default Card;