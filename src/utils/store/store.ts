import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/SearchSlice';
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
  } from "react-redux";

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
