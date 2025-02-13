import React, { FC } from 'react';
import { CardProps } from './types';
import './card.scss';

export const Card: FC<CardProps> = ({ character, isActive, onSelect }) => {
    const handleClick = () => {
        if (onSelect) onSelect();

        window.open(character.url, '_blank');
    };

    return (
        <div className={isActive ? 'card active' : 'card'} onClick={handleClick}>
            <h2 className="card__title">{character.name} - {character.species}</h2>
            <div className='card__info'>
                <p className='card__info-status'>
                    Status: <span className={`card__info-status_text ${character.status.toLowerCase()}`}>{character.status}</span>
                </p>
                <p className="card__info-created">
                    Created: {new Date(character.created).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};
