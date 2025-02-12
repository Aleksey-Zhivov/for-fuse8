import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacters } from '../../api/api';
import { APIResponse, Character, FetchCharactersParams } from '../../api/types';

interface SearchState {
    results: Character[];
    resultsIsLoading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}

const initialState: SearchState = {
    results: [],
    resultsIsLoading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
};

export const searchCharacters = createAsyncThunk<
    APIResponse, 
    FetchCharactersParams
>(
    'search/fetchCharacters',
    async (params) => fetchCharacters(params)
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchCharacters.pending, (state) => {
                state.resultsIsLoading = true;
            })
            .addCase(searchCharacters.fulfilled, (state, action) => {
                state.resultsIsLoading = false;
                state.results = action.payload.results;
                state.totalPages = action.payload.info.pages;
            })
            .addCase(searchCharacters.rejected, (state, action) => {
                state.resultsIsLoading = false;
                state.error = action.error.message || 'Ошибка выполнения запроса персонажей.';
            });
    },
});

export const { setPage } = searchSlice.actions;
export default searchSlice.reducer;
