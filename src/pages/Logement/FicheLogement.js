import React from "react";
import DisplayLogement from "../../components/DisplayLogement/DisplayLogement";
import './FicheLogement.scss';

function FicheLogement() {
    return(
        <div className="ficheLogement-wrapper">
            <div>
                <main className="ficheLogement-container">
                    <DisplayLogement/>
                </main>
            </div>
        </div>
    )
}

export default FicheLogement;