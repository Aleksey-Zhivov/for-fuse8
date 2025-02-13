import React from 'react';
import './preloader.scss';

export const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__spinner"></div>
            <p className="preloader__text">Загрузка...</p>
        </div>
    );
};
