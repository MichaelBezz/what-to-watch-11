import {State} from '../../types/state';
import {Film} from '../../types/film';
import {Reducer} from '../../constants';

export const getFilm = (state: State): Film | null => state[Reducer.Film].film;
export const getIsFilmLoading = (state: State): boolean => state[Reducer.Film].isFilmLoading;
