import {store} from '../store/store';
import {UserData} from './user';
import {Films, Film} from './film';
import {Reviews} from './review';
import {AuthorizationStatus} from '../constants';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserDataState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type FilmsDataState = {
  activeGenre: string;
  films: Films;
  isFilmsLoading: boolean;
};

export type SimilarFilmsDataState = {
  films: Films;
  isSimilarFilmsLoading: boolean;
};

export type FavoriteFilmsDataState = {
  films: Films;
  isFavoriteFilmsLoading: boolean;
};

export type FilmDataState = {
  film: Film | null;
  isFilmLoading: boolean;
};

export type PromoFilmDataState = {
  film: Film | null;
  isPromoFilmLoading: boolean;
};

export type ReviewsDataState = {
  reviews: Reviews;
  isReviewsLoading: boolean;
};
