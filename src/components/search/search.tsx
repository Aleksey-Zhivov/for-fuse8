import { useState, useEffect, FC, useRef } from 'react';
import { SearchProps } from './types';
import { useDebounce } from '../../utils/hooks/useDebounce';
import './search.scss';
import { useAppSelector } from '../../utils/store/store';

export const Search: FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const charactersCount = useAppSelector((store) => store.search.totalCount);
    const inputRef = useRef<HTMLInputElement>(null);
    const debouncedQuery = useDebounce(query, 1000);

    useEffect(() => {
        if (debouncedQuery.length > 3) {
            onSearch(debouncedQuery);
        }
        inputRef.current?.focus();
    }, [debouncedQuery, onSearch]);

    return (
        <div className='search'>
            <div className='search__wrapper'>
                <label className="search__label">
                    <input
                        id="search-input"
                        type="text"
                        ref={inputRef}
                        className="search__label-input"
                        placeholder="Search characters..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
                {charactersCount > 0 && <span className='search__results-count'>Found characters: {charactersCount}</span>}
            </div>
        </div>
    );
};
