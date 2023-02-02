import {createSlice} from '@reduxjs/toolkit';
import {fetchFilms} from './api-actions';
import {FilmsDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: FilmsDataState = {
  films: [],
  isFilmsLoading: false
};

export const filmsData = createSlice({
  name: Reducer.Films,
  initialState,
  reducers: {},
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
