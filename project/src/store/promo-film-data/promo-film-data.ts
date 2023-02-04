import {createSlice} from '@reduxjs/toolkit';
import {fetchPromoFilm} from './api-actions';
import {PromoFilmDataState} from '../../types/state';
import {Reducer} from '../../constants';

const initialState: PromoFilmDataState = {
  film: null,
  isPromoFilmLoading: false
};

export const promoFilmData = createSlice({
  name: Reducer.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.isPromoFilmLoading = false;
        state.film = action.payload ?? null;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.isPromoFilmLoading = false;
        state.film = null;
      });
  }
});
