import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/SearchSlice';
import { useDispatch, useSelector, } from "react-redux";
export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
