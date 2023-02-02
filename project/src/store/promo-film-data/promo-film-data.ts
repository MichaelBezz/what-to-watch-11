import {createSlice} from '@reduxjs/toolkit';
import {fetchPromoFilmAction} from './api-actions';
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
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.isPromoFilmLoading = false;
        state.film = action.payload ?? null;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isPromoFilmLoading = false;
        state.film = null;
      });
  }
});
