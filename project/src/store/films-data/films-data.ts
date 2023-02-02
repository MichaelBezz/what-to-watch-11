import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchFilms} from './api-actions';
import {FilmsDataState} from '../../types/state';
import {Reducer, DEFAULT_GENRE} from '../../constants';

const initialState: FilmsDataState = {
  activeGenre: DEFAULT_GENRE,
  films: [],
  isFilmsLoading: false
};

export const filmsData = createSlice({
  name: Reducer.Films,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.activeGenre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isFilmsLoading = false;
        state.films = action.payload ?? [];
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isFilmsLoading = false;
        state.films = [];
      });
  }
});

export const {setGenre} = filmsData.actions;
