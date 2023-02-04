import {State} from '../../types/state';
import {Films} from '../../types/film';
import {Reducer} from '../../constants';

export const getSimilarFilms = (state: State): Films => state[Reducer.SimilarFilms].films;
export const getIsSimilarFilmsLoading = (state: State): boolean => state[Reducer.SimilarFilms].isSimilarFilmsLoading;
