import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json'; // Importation des données JSON
import Carrousel from '../Carrousel/Carrousel'; // Composant pour afficher les images
import Dropdown from '../Dropdown/dropdown';
import Rate from '../Rate/Rate';

const DisplayLogement = () => {
    const { id } = useParams(); // Récupère l'ID du logement à partir de l'URL
    const logement = logements.find((item) => item.id === id); // Cherche le logement correspondant à l'ID

    if (!logement) {
        // Si le logement n'est pas trouvé
        return <Navigate to="*" />;
    }

    return (
        <div>
            {/* Carrousel d'images */}
            <Carrousel slides={logement.pictures} />

            <div className='description-header'>
                {/* Titre */}
                <div className='description__title'>
                    <h1 className='description__title-logement'>{logement.title}</h1>
                    {/* localisation */}
                    <p className='description__title-location'>{logement.location}</p>
                     {/* Liste des tags */}
                <div className='tags'>
                    {logement.tags.map((tag, index) => (
                        <span key={index} className='tag'>
                            {tag}
                        </span>
                    ))}
                </div>
                </div>
                <div className='information__hote'>
                    {/* Informations sur l'hôte */}
                    <div className='information__hote-nameImg'>
                        <span className='information__hote-name'>{logement.host.name}</span>
                        <img className='information__hote-img' src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className='description__hote-rating'>
                        <Rate score={logement.rating} />
                    </div>
                </div>

            </div>

            <div className='dropdown__logement'>
                {/* Description du logement */}
                <div className="dropdown__logement-description">
                    <Dropdown title="Description" content={<p>{logement.description}</p>} />
                    {/* Liste des équipements */}
                </div>
                <div className="dropdown__logement-equipement">
                    <Dropdown
                        title="Équipements"
                        content={
                            <ul className='list-equipement'>
                                {logement.equipments.map((equipement, index) => (
                                    <li key={index}>{equipement}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </div>


        </div>
    );
};

export default DisplayLogement;
