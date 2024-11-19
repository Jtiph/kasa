import React from 'react';
import "./Card.scss";

function Card(cards) {
    return (
        <div className="card">
            <img src={cards.image} alt={cards.title} className="card__img" />
            <div className="card__overlay"></div>
            <h2 className="card__title">{cards.title}</h2>
        </div>
    );
}

export default Card;
