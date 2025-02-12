import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/SearchSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
