import {State} from '../../types/state';
import {Films} from '../../types/film';
import {Reducer} from '../../constants';

export const getFilms = (state: State): Films => state[Reducer.Films].films;
export const getIsFilmsLoading = (state: State): boolean => state[Reducer.Films].isFilmsLoading;
