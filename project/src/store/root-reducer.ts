import {combineReducers} from '@reduxjs/toolkit';
import {userData} from './user-data/user-data';
import {filmsData} from './films-data/films-data';
import {similarFilmsData} from './similar-films-data/similar-films-data';
import {favoriteFilmsData} from './favorite-films-data/favorite-films-data';
import {filmData} from './film-data/film-data';
import {promoFilmData} from './promo-film-data/promo-film-data';
import {reviewsData} from './reviews-data/reviews-data';
import {Reducer} from '../constants';

export const rootReducer = combineReducers({
  [Reducer.User]: userData.reducer,
  [Reducer.Films]: filmsData.reducer,
  [Reducer.SimilarFilms]: similarFilmsData.reducer,
  [Reducer.FavoriteFilms]: favoriteFilmsData.reducer,
  [Reducer.Film]: filmData.reducer,
  [Reducer.PromoFilm]: promoFilmData.reducer,
  [Reducer.Reviews]: reviewsData.reducer
});
