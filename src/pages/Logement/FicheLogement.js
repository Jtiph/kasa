import React from "react";
import DisplayLogement from "../../components/DisplayLogement/DisplayLogement";
import './FicheLogement.scss';

function FicheLogement() {
    return(
        <div className="ficheLogement-wrapper">
                <main className="ficheLogement-container">
                    <DisplayLogement/>
                </main>
        </div>
    )
}

export default FicheLogement;