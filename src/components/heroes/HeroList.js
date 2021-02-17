import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publusher}) => {

    // const heroes = getHeroesByPublisher(publusher);
    const heroes = useMemo(() => getHeroesByPublisher(publusher), [publusher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
