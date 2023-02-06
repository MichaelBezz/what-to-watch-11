import {State} from '../../types/state';
import {Films} from '../../types/film';
import {Reducer} from '../../constants';

export const getFavoriteFilms = (state: State): Films => state[Reducer.FavoriteFilms].films;
export const getIsFavoriteFilmsLoading = (state: State): boolean => state[Reducer.FavoriteFilms].isFavoriteFilmsLoading;
