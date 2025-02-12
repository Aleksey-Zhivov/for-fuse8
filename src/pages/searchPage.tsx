import { useAppDispatch, useAppSelector } from '../utils/store/store';
import { Search } from '../components/search/search';
import { FC, useEffect, useState } from 'react';
import { clearSearch, searchCharacters } from '../utils/slices/SearchSlice';
import { Card } from '../components/card/card';
import { Pagination } from '../components/pagination/pagination';
import './searchPage.scss';

export const SearchPage: FC = () => {
    const dispatch = useAppDispatch();
    const { results, resultsIsLoading, error, currentPage } = useAppSelector((state) => state.search);
    const [query, setQuery] = useState('');
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        if (query.length > 3) {
            dispatch(searchCharacters({ query, page: currentPage }));
        } else {
            dispatch(clearSearch());
        }
    }, [query, currentPage, dispatch]);

    return (
        <div>
            <Search onSearch={setQuery} />
            {resultsIsLoading && <p>Загружаем...</p>}
            {error && <p>Ошибка: {error}</p>}
            <div className="cards">
                {results.slice().reverse().map((character) => (
                    <Card 
                        key={character.id} 
                        character={character} 
                        isActive={character.id === activeId} 
                        onSelect={() => setActiveId(character.id)}
                    />
                ))}
            </div>
            <Pagination query={query}/>
        </div>
    );
};
