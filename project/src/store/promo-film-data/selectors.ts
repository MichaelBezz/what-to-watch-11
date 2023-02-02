import {State} from '../../types/state';
import {Film} from '../../types/film';
import {Reducer} from '../../constants';

export const getPromoFilm = (state: State): Film | null => state[Reducer.PromoFilm].film;
export const getIsPromoFilmLoading = (state: State): boolean => state[Reducer.PromoFilm].isPromoFilmLoading;
