import React, { useState } from "react";
import "./Carrousel.scss"; 

function Carrousel({ slides }) {
    const [current, setCurrentIndex] = useState(0); // Initialiser l'index actuel à 0
    const length = slides.length; // Longueur du tableau de slides

    // Fonction pour aller à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === length - 1 ? 0 : prevIndex + 1
        );
    };

    // Fonction pour revenir à l'image précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? length - 1 : prevIndex - 1
        );
    };

    // S'assurer que slides contient bien des éléments avant de tenter de les afficher
    if (!Array.isArray(slides) || slides.length === 0) {
        return null; // ou afficher un message d'erreur
    }

    return (
        <section className="slide">
            {length > 1 && (
                <p className="left-arrow" onClick={prevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                </p>
            )}
            {length > 1 && (
                <p className="right-arrow" onClick={nextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </p>
            )}
            {slides.map((image, index) => {
                return (
                    <div
                        key={index}
                        className={index === current ? "slider active" : "slider"}
                    >
                        {index === current && (
                            <img src={image} alt="img-appartement" className="slide__image" />
                        )}
                        {index === current && length > 1 && (
                            <span className="slider__number">
                                {current + 1}/{length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Carrousel;
