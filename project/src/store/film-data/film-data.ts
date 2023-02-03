import {createSlice} from '@reduxjs/toolkit';
import {fetchFilmById} from './api-actions';
import {FilmDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: FilmDataState = {
  film: null,
  isFilmLoading: false
};

export const filmData = createSlice({
  name: Reducer.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmById.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.isFilmLoading = false;
        state.film = action.payload ?? null;
      })
      .addCase(fetchFilmById.rejected, (state) => {
        state.isFilmLoading = false;
        state.film = null;
      });
  }
});
