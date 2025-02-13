import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacters } from '../../api/api';
import { APIResponse, Character, FetchCharactersParams } from '../../api/types';

interface SearchState {
    results: Character[];
    totalCount: number;
    resultsIsLoading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}

const initialState: SearchState = {
    results: [],
    totalCount: 0,
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
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        clearSearch: (state) => {
            state.results = [];
            state.totalCount = 0;
            state.error = null;
            state.currentPage = 1;
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
                state.totalCount = action.payload.info.count;
                state.totalPages = action.payload.info.pages;
            })
            .addCase(searchCharacters.rejected, (state, action) => {
                state.resultsIsLoading = false;
                state.error = action.error.message || 'Ошибка загрузки';
                state.results = [];
                state.totalCount = 0;
            });
    },
});

export const { setPage, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
