import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import DisplayLogement from "../../components/DisplayLogement/DisplayLogement";
import './FicheLogement.scss';

function FicheLogement() {
    return(
        <div className="ficheLogement-wrapper">
            <div>
                <header>
                    <Navbar/>
                </header>
                <main className="ficheLogement-container">
                    <DisplayLogement/>
                </main>
            </div>
                <Footer/>
        </div>
    )
}

export default FicheLogement;