import React from "react";
import fullStar from "../../assets/images/rate/star-active 1.png"; // Étoile pleine
import emptyStar from "../../assets/images/rate/star-inactive 1.png"; // Étoile vide

function Rate({ score }) {
  const notes = [1, 2, 3, 4, 5]; 

  return (
    <div className="rate">
      {notes.map((note) => (
        <img
          key={note} // Clé unique pour chaque étoile
          src={score >= note ? fullStar : emptyStar} // condition ternaire si le score est supérieur ou = à note alors afficher une étoile pleine sinon une étoile vide
          alt="star"
          className="etoile"
        />
      ))}
    </div>
  );
}

export default Rate;
