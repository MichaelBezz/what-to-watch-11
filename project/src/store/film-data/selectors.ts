import {State} from '../../types/state';
import {Film} from '../../types/film';
import {Reducer} from '../../constants';

export const getFilmById = (state: State): Film | null => state[Reducer.Film].film;
export const getIsFilmByIdLoading = (state: State): boolean => state[Reducer.Film].isFilmLoading;
