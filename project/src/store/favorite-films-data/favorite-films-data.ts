import {createSlice} from '@reduxjs/toolkit';
import {fetchFavoriteFilms} from './api-actions';
import {FavoriteFilmsDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: FavoriteFilmsDataState = {
  films: [],
  isFavoriteFilmsLoading: false
};

export const favoriteFilmsData = createSlice({
  name: Reducer.FavoriteFilms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.isFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.isFavoriteFilmsLoading = false;
        state.films = action.payload ?? [];
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.isFavoriteFilmsLoading = false;
        state.films = [];
      });
  }
});
