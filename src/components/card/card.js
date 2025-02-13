import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './card.scss';
export const Card = ({ character, isActive, onSelect }) => {
    const handleClick = () => {
        if (onSelect)
            onSelect();
        window.open(character.url, '_blank');
    };
    return (_jsxs("div", { className: isActive ? 'card active' : 'card', onClick: handleClick, children: [_jsxs("h2", { className: "card__title", children: [character.name, " - ", character.species] }), _jsxs("div", { className: 'card__info', children: [_jsxs("p", { className: 'card__info-status', children: ["Status: ", _jsx("span", { className: `card__info-status_text ${character.status.toLowerCase()}`, children: character.status })] }), _jsxs("p", { className: "card__info-created", children: ["Created: ", new Date(character.created).toLocaleDateString()] })] })] }));
};
