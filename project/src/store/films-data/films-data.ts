import {createSlice} from '@reduxjs/toolkit';
import {fetchFilmsAction} from './api-actions';
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
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.isFilmsLoading = false;
        state.films = action.payload ?? [];
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsLoading = false;
        state.films = [];
      });
  }
});
