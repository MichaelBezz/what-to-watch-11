import {createSlice} from '@reduxjs/toolkit';
import {fetchSimilarFilms} from './api-actions';
import {SimilarFilmsDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: SimilarFilmsDataState = {
  films: [],
  isSimilarFilmsLoading: false
};

export const similarFilmsData = createSlice({
  name: Reducer.SimilarFilms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.isSimilarFilmsLoading = false;
        state.films = action.payload ?? [];
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.isSimilarFilmsLoading = false;
        state.films = [];
      });
  }
});
