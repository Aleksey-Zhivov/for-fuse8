import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../utils/store/store';
import { Search } from '../components/search/search';
import { useEffect, useState } from 'react';
import { clearSearch, searchCharacters, setPage } from '../utils/slices/SearchSlice';
import { Card } from '../components/card/card';
import { Pagination } from '../components/pagination/pagination';
import './searchPage.scss';
import { Error } from '../components/error/error';
import { Preloader } from '../components/preloader/preloader';
export const SearchPage = () => {
    const dispatch = useAppDispatch();
    const { results, resultsIsLoading, error, currentPage, totalCount } = useAppSelector((state) => state.search);
    const [query, setQuery] = useState('');
    const [activeId, setActiveId] = useState(null);
    useEffect(() => {
        if (query.length > 3) {
            dispatch(setPage(1));
            dispatch(searchCharacters({ query, page: 1 }));
        }
        else {
            dispatch(clearSearch());
        }
    }, [query, dispatch]);
    return (_jsxs("section", { className: 'page', children: [_jsx(Search, { onSearch: setQuery }), resultsIsLoading && _jsx(Preloader, {}), totalCount > 0 ?
                _jsxs(_Fragment, { children: [_jsx("div", { className: "page__cards", children: results.slice().reverse().map((character) => (_jsx(Card, { character: character, isActive: character.id === activeId, onSelect: () => setActiveId(character.id) }, character.id))) }), _jsx(Pagination, { query: query })] }) :
                error && _jsx(Error, { errorMessage: `Ошибка: ${error}` })] }));
};
