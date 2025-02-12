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
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        clearSearch: (state) => {
            state.results = [];
            state.totalCount = 0;
            state.error = null;
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
                state.totalCount = action.payload.info.count;
            })
            .addCase(searchCharacters.rejected, (state, action) => {
                state.resultsIsLoading = false;
                state.error = action.error.message || 'Ошибка выполнения запроса персонажей.';
            });
    },
});

export const { setPage, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
