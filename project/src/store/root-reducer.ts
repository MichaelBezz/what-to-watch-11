import {combineReducers} from '@reduxjs/toolkit';
import {userData} from './user-data/user-data';
import {filmsData} from './films-data/films-data';
import {promoFilmData} from './promo-film-data/promo-film-data';
import {Reducer} from '../constants';

export const rootReducer = combineReducers({
  [Reducer.User]: userData.reducer,
  [Reducer.Films]: filmsData.reducer,
  [Reducer.PromoFilm]: promoFilmData.reducer
});
