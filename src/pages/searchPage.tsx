import { useAppDispatch, useAppSelector } from '../utils/store/store';
import { Search } from '../components/search/search';
import { FC, useEffect, useState } from 'react';
import { clearSearch, searchCharacters, setPage } from '../utils/slices/SearchSlice';
import { Card } from '../components/card/card';
import { Pagination } from '../components/pagination/pagination';
import './searchPage.scss';
import { Error } from '../components/error/error';
import { Preloader } from '../components/preloader/preloader';

export const SearchPage: FC = () => {
    const dispatch = useAppDispatch();
    const { results, resultsIsLoading, error, currentPage, totalCount } = useAppSelector((state) => state.search);
    const [query, setQuery] = useState('');
    const [activeId, setActiveId] = useState<number | null>(null);


    useEffect(() => {
        if (query.length > 3) {
            dispatch(setPage(1));
            dispatch(searchCharacters({ query, page: 1 }));
        } else {
            dispatch(clearSearch());
        }
    }, [query, dispatch]);

    return (
        <section className='page'>
            <Search onSearch={setQuery} />
            {resultsIsLoading && <Preloader />}
            {totalCount > 0 ? 
                <>
                    <div className="page__cards">
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
                </> : 
                    error && <Error errorMessage={`Ошибка: ${error}`} />
                }
        </section>
    );
};