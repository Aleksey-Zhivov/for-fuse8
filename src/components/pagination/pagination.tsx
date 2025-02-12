import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/store/store';
import { searchCharacters, setPage } from '../../utils/slices/SearchSlice';
import { PaginationProps } from './types';
import './pagination.scss';

export const Pagination: FC<PaginationProps> = ({ query }) => {
    const dispatch = useAppDispatch();
    const { currentPage, totalPages } = useAppSelector((state) => state.search);

    if (totalPages <= 1) return null;

    const changePage = (newPage: number) => {
        dispatch(setPage(newPage));
        dispatch(searchCharacters({ query, page: newPage }));
    };

    return (
        <nav className="pagination" aria-label="Pagination">
            <button
                className="pagination__button"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-disabled={currentPage === 1}
            >
                Назад
            </button>
            <span className="pagination__info">
                Страница {currentPage} из {totalPages}
            </span>
            <button
                className="pagination__button"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-disabled={currentPage === totalPages}
            >
                Вперед
            </button>
        </nav>
    );
};
