import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../../utils/store/store';
import { searchCharacters, setPage } from '../../utils/slices/SearchSlice';
import './pagination.scss';
export const Pagination = ({ query }) => {
    const dispatch = useAppDispatch();
    const { currentPage, totalPages } = useAppSelector((state) => state.search);
    if (totalPages <= 1)
        return null;
    const changePage = (newPage) => {
        dispatch(setPage(newPage));
        dispatch(searchCharacters({ query, page: newPage }));
    };
    return (_jsxs("nav", { className: "pagination", "aria-label": "Pagination", children: [_jsx("button", { className: "pagination__button", onClick: () => changePage(currentPage - 1), disabled: currentPage === 1, "aria-disabled": currentPage === 1, children: "\u041D\u0430\u0437\u0430\u0434" }), _jsxs("span", { className: "pagination__info", children: ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", currentPage, " \u0438\u0437 ", totalPages] }), _jsx("button", { className: "pagination__button", onClick: () => changePage(currentPage + 1), disabled: currentPage === totalPages, "aria-disabled": currentPage === totalPages, children: "\u0412\u043F\u0435\u0440\u0435\u0434" })] }));
};
