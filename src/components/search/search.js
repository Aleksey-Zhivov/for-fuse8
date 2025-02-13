import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../../utils/hooks/useDebounce';
import './search.scss';
import { useAppSelector } from '../../utils/store/store';
export const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const { resultsIsLoading, totalCount } = useAppSelector((store) => store.search);
    const inputRef = useRef(null);
    const debouncedQuery = useDebounce(query, 1000);
    useEffect(() => {
        if (debouncedQuery.length > 3) {
            onSearch(debouncedQuery);
        }
        inputRef.current?.focus();
    }, [debouncedQuery, onSearch]);
    return (_jsx("div", { className: 'search', children: _jsxs("div", { className: 'search__wrapper', children: [_jsx("label", { className: "search__label", children: _jsx("input", { id: "search-input", type: "text", ref: inputRef, className: "search__label-input", placeholder: "Search characters...", value: query, onChange: (e) => setQuery(e.target.value) }) }), !resultsIsLoading && totalCount > 0 &&
                    _jsxs("span", { className: 'search__results-count', children: ["Found characters: ", totalCount] })] }) }));
};
