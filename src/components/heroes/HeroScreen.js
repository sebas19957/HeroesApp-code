import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams(); //Extraer argumentos que vienen del url
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    
    if (!hero) {
        return <Redirect to="/"/>
    } 

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        link
    } = hero;

    const handleReturn = () => {
        // history.push('/');
        
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
    }

    console.log(`..assets/heroes/${heroeId}.jpg`);


    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img
                    src={link}
                    alt={superhero}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5 className="mt-4">Character</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-primary" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}
